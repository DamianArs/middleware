import React from "react";
import { Card } from "./Card.js";

export const Note = (props) => {
  return <Card header={props.header} background={props.backgroundColor} />;
};
