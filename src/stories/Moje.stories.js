import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { Text } from "./../components/Text";
import { Button } from "./../components/Button";
import { Panel } from "./../components/Panel";
import { makeStyles } from "@material-ui/core/styles";
import { Adminek } from "./../components/Admin";
import { Card } from "./../components/Card";

import {
  Admin,
  Resource,
  ListGuesser,
  List,
  Datagrid,
  EmailField,
  TextField,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

export default {
  title: "Moje",
  decorators: [withKnobs],
};

export const WithText = (props) => {
  const useStyles = makeStyles({
    root: {
      color: "blue",
    },
  });

  const classes = useStyles(props);
  const hasCustomStyles = boolean("Has custom styles", false);

  return <Text className={hasCustomStyles && classes.root} />;
};
export const WithButton = () => {
  const button = text("Button", "close");
  return <Button>{button}</Button>;
};

export const WithPanel = () => {
  const Label = "Panel";
  const options = {
    primary: "yellow",
    secondary: "blue",
    tertiary: "green",
  };
  const defaultValue = "yellow";
  const value = select(Label, options, defaultValue);
  return <Panel backgroundColor={value} />;
};

export const WithAdmin = () => {
  const hasCustomStyles = boolean("Has custom styles", true);
  const useStyles = makeStyles({
    root: {
      color: "red",
    },
  });
  const UserList = (props) => {
    const classes = useStyles();

    if (hasCustomStyles) {
      return (
        <List {...props}>
          <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField className={classes.root} source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
          </Datagrid>
        </List>
      );
    }
    return (
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      </List>
    );
  };
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  );
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export const WithCard = () => {
  return <Card />;
};
