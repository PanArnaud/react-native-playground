import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import NewsNavigator from "./NewsNavigator";

const Tab = createBottomTabNavigator();

const MainNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "news-navigator":
              return (
                <Icon
                  name="newspaper-o"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              );
            case "notifications":
              return (
                <Icon
                  name="bell"
                  type="feather"
                  color={color}
                  size={size}
                />
              );
            case "profile":
              return (
                <Icon
                  name="user"
                  type="feather"
                  color={color}
                  size={size}
                />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="news-navigator"
        component={NewsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
