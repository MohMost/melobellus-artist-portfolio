import classes from "./Footer.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_65_21" fill="white">
          <path d="M0 65C0 45.67 15.67 30 35 30H1405C1424.33 30 1440 45.67 1440 65V350H0V65Z" />
        </mask>
        <path
          d="M0 65C0 45.67 15.67 30 35 30H1405C1424.33 30 1440 45.67 1440 65V350H0V65Z"
          fill="#110320"
        />
        <path
          d="M0 65C0 44.5655 16.5655 28 37 28H1403C1423.43 28 1440 44.5655 1440 65C1440 46.7746 1424.33 32 1405 32H35C15.67 32 0 46.7746 0 65ZM1440 350H0H1440ZM0 350V30V350ZM1440 30V350V30Z"
          fill="#DEFFEB"
          mask="url(#path-1-inside-1_65_21)"
        />
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
      </svg>
    </footer>
  );
}
