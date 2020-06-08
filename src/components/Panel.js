import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Article } from "./Article";
import { Note } from "./Note";
import { Twitter } from "./Twitter";
import { Proba } from "./Proba";
import { useDispatch } from "react-redux";
import { changeHeader } from "./../store/action";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
  },
  div: {
    height: "100vh",
    width: "150px",
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: (props) => ({
    marginBottom: "80px",
    border: "none",
    borderRadius: "50px",
    fontSize: "24px",
    width: "100px",
    backgroundColor: "yellow",
    textDecoration: "none",
    color: "black",
    "&.active": {
      color: "red",
      fontWeight: "bold",
    },
  }),
});

export const Panel = (props) => {
  const dispatch = useDispatch();
  const handleDispatch = React.useCallback(() => {
    dispatch(changeHeader("Nowy"));
  });
  const stateHeader = (state) => state.header;
  const header = useSelector(stateHeader);
  const classes = useStyles(props);
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.div}>
          <NavLink className={classes.button} exact to="/">
            twitter
          </NavLink>
          <NavLink className={classes.button} to="/article">
            article
          </NavLink>
          <NavLink className={classes.button} to="/notes">
            notes
          </NavLink>
          <NavLink className={classes.button} to="/proba">
            proba
          </NavLink>
          <button onClick={handleDispatch}>Add</button>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Twitter
                header={header}
                backgroundColor={props.backgroundColor.primary}
              />
            )}
          />
          <Route
            path="/article"
            component={() => (
              <Article
                header={header}
                backgroundColor={props.backgroundColor.secondary}
              />
            )}
          />
          <Route
            path="/notes"
            component={() => (
              <Note
                header={header}
                backgroundColor={props.backgroundColor.tertiary}
              />
            )}
          />
          <Route path="/proba" component={() => <Proba />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
