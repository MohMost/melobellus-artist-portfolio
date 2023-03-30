import { useState } from "react";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
import Button from "@mui/material/Button";
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
              <img className={classes.li} src="/instagram.svg" alt="" />
            </a>

            <a href="">
              <img className={classes.li} src="/facebook.svg" alt="" />
            </a>
            <a href="">
              <img className={classes.li} src="/behance.svg" alt="" />
            </a>
          </section>
          <a className={classes.btn}>Hire Me</a>
        </div>
        <img
          className={classes.background_banner}
          src="/backgroundbanner.png"
          alt="backgroundbanner"
        />
      </div>
      <svg
        className={classes.svg}
        width="100%"
        height="auto"
        viewBox="0 0 1439 251"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_24_3" fill="white">
          <path d="M0 30H1439V251H0V30Z" />
        </mask>
        <path d="M0 30H1439V251H0V30Z" fill="#21073C" />
        <path
          d="M0 32H1439V28H0V32Z"
          fill="#DEFFEB"
          mask="url(#path-1-inside-1_24_3)"
        />
        <a href="#main">
          <svg className={classes.arrow_container}>
            <rect
              x="690.414"
              y="30"
              width="40.4264"
              height="40.4264"
              transform="rotate(-45 690.414 30)"
              fill="#21073C"
              stroke="#DEFFEB"
              stroke-width="2"
            />
            <path
              d="M719.075 42.3881L706.953 30.2663L709.074 28.1071L717.559 36.5924V18.1444H720.59V36.5924L729.075 28.1071L731.196 30.2663L719.075 42.3881Z"
              fill="#DEFFEB"
            />
          </svg>
        </a>
      </svg>
    </header>
  );
}
