import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  div: {
    width: "300px",
    border: "1px solid black",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    marginLeft: "20px",
    height: "410px",
  },
  header: (props) => ({
    backgroundColor: props.background,
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    padding: "10px 0",
    textAlign: "center",
    margin: "0",
  }),
  par: {
    padding: "10px",
  },
});

export const Card = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.div}>
      <h1 className={classes.header}>{props.header}</h1>
      <p className={classes.par}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, odit
        repudiandae? Nam inventore repellendus soluta corporis voluptate
        assumenda et temporibus molestiae excepturi, rem mollitia recusandae
        iure quo. Iusto, quis soluta!Sunt facere natus itaque, dolor quasi
        nulla! Itaque magnam quaerat minima fugiat corrupti fugit asperiores,
        nihil explicabo esse repellendus et voluptatem dolorum repellat iste
        ducimus aliquam voluptas ut sequi alias?
      </p>
    </div>
  );
};
