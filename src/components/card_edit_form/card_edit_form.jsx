import React, { memo, useCallback } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = memo(({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName } = card;

  const onChange = (event) => {
    if (event.currentTarget === null) return;
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  const onFileChange = useCallback(
    (file) => {
      updateCard({
        ...card,
        fileName: file.name,
        fileURL: file.url,
      });
    },
    [card, updateCard]
  );

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="lightGrey">Light Grey</option>
        <option value="grey">Grey</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="skyblue">SkyBlue</option>
        <option value="purple">Purple</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        value={message}
        name="message"
        placeholder="Message"
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
});

export default CardEditForm;
