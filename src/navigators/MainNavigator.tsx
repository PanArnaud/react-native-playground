import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";
import LatestNews from "../screens/LatestNews";
import MarketData from "../screens/MarketData";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const MainNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "latest-news":
              return (
                <Icon
                  name="newspaper-o"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              );
            case "market-data":
              return (
                <Icon
                  name="linechart"
                  type="ant-design"
                  color={color}
                  size={size}
                />
              );
            case "notifications":
              return (
                <Icon
                  name="bell-o"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              );
            case "profile":
              return (
                <Icon
                  name="user-o"
                  type="font-awesome"
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
      <Tab.Screen name="latest-news" component={LatestNews} />
      <Tab.Screen name="market-data" component={MarketData} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
