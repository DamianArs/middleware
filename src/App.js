import React from "react";
import { Text } from "./components/Text";
import "./App.css";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Button } from "./components/Button";
import { Panel } from "./components/Panel";
import { Adminek } from "./components/Admin";
import { Card } from "./components/Card";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/index";

const useStyles = makeStyles({
  div: {
    display: "flex",
  },
});
const theme = {
  primary: "yellow",
  secondary: "blue",
  tertiary: "green",
};

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.div}>
          <Panel backgroundColor={theme} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
