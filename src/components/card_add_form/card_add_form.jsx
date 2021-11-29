import React, { memo } from "react";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(({ addCard }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), // uuid
      name: "",
      company: "",
      theme: "lightGrey",
      title: "",
      email: "",
      message: "",
      fileName: "",
      fileURL: "",
    };

    addCard(card);
  };

  return (
    <div className={styles.addCard} onClick={onSubmit}>
      <i className="fas fa-plus"></i>
    </div>
  );
});

export default CardAddForm;
