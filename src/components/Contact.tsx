import React, { useState, useRef } from "react";
import classes from "./Contact.module.css";
import Button from "./Button";
import emailjs from "@emailjs/browser";

export default function Contact(props: any) {
  const form = useRef<HTMLFormElement>(null);
  const [popUpState, setPopUpState] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  let message = "";
  const toggleClass = () => {
    setIsToggled(true);
    console.log(isToggled);
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_gkt1f2n",
          "template_9vm4zc6",
          form.current,
          "Xo4-e87CZFWltdmgi"
        )
        .then(
          (result: { text: any }) => {
            alert("✅ | The message was sent");
            setPopUpState("success");
          },
          (error: { text: any }) => {
            alert(
              "❌ | it seem there was an error if you couldent send the message contact me at this adress : mostefai147@gmail.com"
            );
            setPopUpState("error");
          }
        );
    }
  };
  const html = (
    <div className={classes.alert}>
      <span className="fas fa-exclamation-circle"></span>
      <span className="msg">Warning: This is a warning alert!</span>
      <div className="close-btn">
        <span className="fas fa-times"></span>
      </div>
    </div>
  );
  return (
    <div id="contact" className={classes.contact}>
      <form ref={form} className={classes.form} onSubmit={sendEmail}>
        <h2 className={classes.title}>Contact Me</h2>
        <input
          id={classes.name}
          type="text"
          name="user_name"
          placeholder="Your/Company name..."
        />
        <input
          type="email"
          name="user_email"
          id={classes.phone}
          placeholder="Your Adress..."
          required
        />

        <textarea
          id={classes.message}
          rows={12}
          name="message"
          placeholder="Your Message..."
        ></textarea>

        <div className={classes.button_container}>
          <Button type="submit" text="Send" event={toggleClass} />
        </div>
      </form>
    </div>
  );
}
