import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: () => ({
    padding: "0",
    backgroundColor: `yellow`,
    color: "black",
    border: "none",
    borderRadius: "50px",
    width: "220px",
    height: "47px",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "16px",
  }),
});

export const Button = ({ children, ...props }) => {
  const classes = useStyles(props);
  return <button className={classes.button}>{children}</button>;
};
