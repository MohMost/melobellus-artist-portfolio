import { useState } from "react";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
import Button from "./Button";

export default function Header() {
  return (
    <header className={classes.header}>
      <Navbar />

      <div className={classes.banner}>
        <h1 className={classes.banner_h1}>
          Designer, illustrator, art teacher
        </h1>
        <img
          className={classes.banner_illustration}
          src="/banner_illustration.png"
          alt="banner illustration"
        />
        <div className={classes.button_icon}>
          <section className={classes.ul}>
            <a href="">
              <img
                className={classes.li}
                src="/instagram.svg"
                alt="instagram"
              />
            </a>

            <a href="">
              <img className={classes.li} src="/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.behance.net/Magikaarp">
              <img className={classes.li} src="/behance.svg" alt="behance" />
            </a>
          </section>
          <section className={classes.button_container}>
            <Button text="Hire Me" />
          </section>
        </div>
      </div>
      <div className={classes.svg_container}>
        <svg
          className={classes.svg}
          width="100%"
          height="auto"
          viewBox="0 0 1440 123"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask id="path-1-inside-1_135_10" fill="white">
            <path d="M0 30H1443V123H0V30Z" />
          </mask>
          <path d="M0 30H1443V123H0V30Z" fill="#21073C" />
          <path
            d="M0 28H1443V32H0V28ZM1443 123H0H1443ZM0 123V30V123ZM1443 30V123V30Z"
            fill="#DEFFEB"
            mask="url(#path-1-inside-1_135_10)"
          />
          <a href="#gallery">
            <rect
              x="691.414"
              y="30"
              width="40.4264"
              height="40.4264"
              transform="rotate(-45 691.414 30)"
              fill="#21073C"
              stroke="#DEFFEB"
              stroke-width="2"
            />
            <path
              d="M720.122 42.2437L708 30.1218L710.121 27.9626L718.607 36.4479V18H721.637V36.4479L730.122 27.9626L732.244 30.1218L720.122 42.2437Z"
              fill="#DEFFEB"
            />
          </a>
        </svg>
      </div>
    </header>
  );
}
