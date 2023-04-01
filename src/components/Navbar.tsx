import { useState } from "react";
import classes from "./Navbar.module.css";
import Button from "./Button";
export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <a href="">
          <img src="/melobellus.svg" alt="logo" />
        </a>
      </div>
      <div className={classes.links}>
        <ul className={classes.links_ul}>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Home
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#about">
              About
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#contact">
              Contact
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#gallery">
              Gallery
            </a>
          </li>
          <li className={classes.links_li}>
            <Button text="Services"></Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
