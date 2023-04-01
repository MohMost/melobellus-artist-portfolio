import React from "react";
import classes from "./Button.module.css";
export default function Button(props: any) {
  return (
    <button className={classes.btn} type={props.type}>
      {props.text}
    </button>
  );
}
