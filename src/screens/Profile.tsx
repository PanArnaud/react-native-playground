import { Theme } from "@react-navigation/native";
import { ListItem, Switch, ThemeMode, useThemeMode } from "@rneui/themed";
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Profile = (): JSX.Element => {
  const { navigationMode, setNavigationMode } = React.useContext(ThemeContext);
  const { mode, setMode } = useThemeMode();

  const switchMode = (mode: Theme | ThemeMode): ThemeMode | Theme => {
    return mode === "dark" ? "light" : "dark";
  };

  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>Dark mode</ListItem.Title>
      </ListItem.Content>
      <Switch
        value={navigationMode === "dark" ? true : false}
        onChange={() => {
          setNavigationMode(switchMode(navigationMode) as Theme);
          setMode(switchMode(mode) as ThemeMode);
        }}
      />
    </ListItem>
  );
};

export default Profile;
