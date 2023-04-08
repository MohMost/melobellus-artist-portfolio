import classes from "./Navbar.module.css";
import Button from "./Button";
export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <a className={classes.logo_a} href="#">
          Melobellus
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
      <div className={classes.menu}>
        <svg
          width="30"
          height="22.5"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H17M1 7H17M1 13H17"
            stroke="#E7F1E5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
