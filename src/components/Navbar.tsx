import { useState } from "react";
import classes from "./Navbar.module.css";
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
            <a className={classes.links_a} href="#">
              About
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Contact
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Gallery
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.sign_up} href="#">
              services
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
