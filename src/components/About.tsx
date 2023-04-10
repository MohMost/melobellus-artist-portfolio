import React from "react";
import classes from "./About.module.css";
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

        <p className={classes.content}>
          Un artiste et designer doué dans la création d'œuvres d'art numériques
          et traditionnelles, y compris l'aquarelle et la peinture à l'huile.
          Parcourez ma collection diversifiée d'œuvres d'art, qui comprend des
          logos, des icônes, des illustrations et bien plus encore créés à
          l'aide d'outils tels que Photoshop et Figma.
        </p>
      </div>
    </div>
  );
}
