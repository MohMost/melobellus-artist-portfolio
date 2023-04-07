import classes from "./Footer.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <svg
        className={classes.arrow_container}
        width="100%"
        height="130"
        viewBox="0 0 1440 70"
        preserveAspectRatio="xMidYMid slice"
      >
        <mask id="path-1-inside-1_65_21" fill="white">
          <path d="M0 65C0 45.67 15.67 30 35 30H1405C1424.33 30 1440 45.67 1440 65V70H0V65Z" />
        </mask>
        <path
          d="M0 65C0 45.67 15.67 30 35 30H1405C1424.33 30 1440 45.67 1440 65V70H0V65Z"
          fill="#110320"
        />
        <path
          d="M0 65C0 44.5655 16.5655 28 37 28H1403C1423.43 28 1440 44.5655 1440 65C1440 46.7746 1424.33 32 1405 32H35C15.67 32 0 46.7746 0 65ZM1440 70H0H1440ZM0 70V30V70ZM1440 30V70V30Z"
          fill="#DEFFEB"
          mask="url(#path-1-inside-1_65_21)"
        />
        <a href="#">
          <rect
            x="748.586"
            y="30"
            width="40.4264"
            height="40.4264"
            transform="rotate(135 748.586 30)"
            fill="#21073C"
            stroke="#DEFFEB"
            stroke-width="2"
          />
          <path
            d="M719.878 17.7563L732 29.8782L729.879 32.0374L721.393 23.5521V42H718.363V23.5521L709.878 32.0374L707.756 29.8782L719.878 17.7563Z"
            fill="#DEFFEB"
          />
        </a>
      </svg>

      <div className={classes.container}>
        <h2 className={classes.row1}>Melobellus</h2>
        <div className={classes.row2}>
          <div className={classes.contacts}>
            <a className={classes.phone_mail_container} href="tel:123-456-7890">
              <img src="/phone.svg" alt="" />
              <span className={classes.phone_mail}>+213 697 378 584</span>
            </a>
            <a
              className={classes.phone_mail_container}
              href="mailto:mostefai147@gmail.com"
            >
              <img src="/mail.svg" alt="" />
              <span className={classes.phone_mail}>mostefai147@gmail.com</span>
            </a>
          </div>
          <div className={classes.ul}>
            <a href="">
              <img className={classes.li} src="/instagram.svg" alt="" />
            </a>

            <a href="">
              <img className={classes.li} src="/facebook.svg" alt="" />
            </a>
            <a href="">
              <img className={classes.li} src="/behance.svg" alt="" />
            </a>
          </div>
        </div>
        <p className={classes.row3}>
          Developed and designed by{" "}
          <a href="https://github.com/MohMost" target="_blank">
            MohMost
          </a>{" "}
          © 2023 | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
