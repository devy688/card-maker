import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const getCardsData = useCallback(() => {
    const stopSync = cardRepository.syncCards(userId, (data) => {
      setCards(data);
    });
    return stopSync;
  }, [cardRepository, userId]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = getCardsData();

    return () => stopSync();
  }, [getCardsData, userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/card-maker");
      }
    });
  }, [authService, history]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = useCallback(
    (card) => {
      setCards((cards) => {
        const deleted = { ...cards };
        delete deleted[card.id];
        return deleted;
      });
      cardRepository.removeCard(userId, card);
    },
    [cardRepository, userId]
  );

  return (
    <section className={styles.maker}>
      <header className={styles.header}>
        {onLogout && (
          <span className={styles.logout} onClick={onLogout}>
            Logout
          </span>
        )}
        <h1 className={styles.title}>Business Card Maker</h1>
      </header>
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default Maker;
