import React from "react";
import classes from "./Contact.module.css";
import Button from "./Button";
export default function Contact() {
  return (
    <div id="contact" className={classes.contact}>
      <form className={classes.form}>
        <h2 className={classes.title}>Contact Me</h2>
        <input
          type="text"
          id={classes.name}
          placeholder="Your Name..."
          required
        />
        <input
          type="text"
          id={classes.phone}
          placeholder="Phone no..."
          required
        />
        <textarea
          id={classes.message}
          rows={12}
          placeholder="Your Message..."
        ></textarea>
        <div className={classes.button_container}>
          <Button type="submit" text="Send" />
        </div>
      </form>
    </div>
  );
}
