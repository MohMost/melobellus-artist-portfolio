import { useState } from "react";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
import Button from "./Button";
import Modal from "./Modal";
import Contact from "./Contact";

export default function Header() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(e: any) {
    setModalIsVisible(true);
    document.body.classList.toggle("no-scroll");
  }
  function hideModalHandler(e: any) {
    setModalIsVisible(false);
    document.body.classList.toggle("no-scroll");
  }
  return (
    <header className={classes.header}>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <Contact />
          <div>
            <p className={classes.paragraph}>Or call to:</p>
            <a
              className={classes.phone_mail_container}
              href="tel:+213-673-381-769"
            >
              <img
                className={classes.phone_mail_icon}
                src="/phone.svg"
                alt=""
              />
              <span className={classes.phone_mail}>+213 673 381 769</span>
            </a>
          </div>
        </Modal>
      )}
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
            <a href="https://www.behance.net/Magikaarp" target="_blank">
              <img className={classes.li} src="/behance.svg" alt="behance" />
            </a>
          </section>
          <section className={classes.button_container}>
            <Button event={showModalHandler} text="Hire Me" />
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
          <a className={classes.arrow_container} href="#gallery">
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
