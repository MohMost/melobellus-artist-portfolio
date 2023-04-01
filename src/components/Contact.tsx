import React from "react";
import classes from "./Contact.module.css";
export default function Contact() {
  return (
    <div id="contact" className={classes.contact}>
      <form>
        <input type="text" placeholder="Your Name" required />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
}
