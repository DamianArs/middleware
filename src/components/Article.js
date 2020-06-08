import React from "react";
import { Card } from "./Card";

export const Article = (props) => {
  console.log(props);

  return <Card header={props.header} background={props.backgroundColor} />;
};
