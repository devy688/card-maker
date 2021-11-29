import React, { memo, useRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/card-maker/images/user.jpg";

const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  const cardRef = useRef();
  const avatarRef = useRef();

  const downloadCard = () => {
    exportComponentAsJPEG(cardRef, {
      fileName: name,
      html2CanvasOptions: { backgroundColor: null },
    });
  };

  return (
    <div ref={cardRef} className={`${styles.card} ${getStyles(theme)}`}>
      <img ref={avatarRef} className={styles.avatar} src={url} alt="avatar" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <div className={styles.line}></div>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
      <div className={styles.cover} onClick={downloadCard}>
        <i className={`${styles.icon} fas fa-download`}></i>
      </div>
    </div>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "grey":
      return styles.grey;
    case "lightGrey":
      return styles.lightGrey;
    case "yellow":
      return styles.yellow;
    case "pink":
      return styles.pink;
    case "skyblue":
      return styles.skyblue;
    case "purple":
      return styles.purple;
    default:
      return styles.lightGrey;
  }
}

export default Card;
