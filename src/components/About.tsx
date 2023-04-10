import React from "react";
import classes from "./About.module.css";
import Button from "./Button";
export default function About() {
  return (
    <div id="about" className={classes.about}>
      <img className={classes.image} src="melobellus.png" alt="" />
      <div>
        <div className={classes.title_container}>
          <img src="./star.svg" alt="" />
          <h2 className={classes.title}>About us</h2>
          <img src="./star.svg" alt="" />
        </div>
        <div className={classes.content_container}>
          <p className={classes.content}>
            Un artiste et designer doué dans la création d'œuvres d'art
            numériques et traditionnelles, y compris l'aquarelle et la peinture
            à l'huile. Parcourez ma collection diversifiée d'œuvres d'art, qui
            comprend des logos, des icônes, des illustrations et bien plus
            encore créés à l'aide d'outils tels que Photoshop et Figma.
          </p>
          <p className={classes.content}>
            pour en savoir plus sur moi voici mon cv:
          </p>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mohameto-ddd57.appspot.com/o/gallery%2Funnamed.png?alt=media&token=6769041d-cf44-4e1b-859a-11dbd05fbde4"
            className={classes.button_container}
            target="_blank"
          >
            <Button text="Mon CV" />
          </a>
        </div>
      </div>
    </div>
  );
}
