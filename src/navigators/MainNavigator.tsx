import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LatestNews from "../screens/LatestNews";
import MarketData from "../screens/MarketData";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const MainNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="latest-news" component={LatestNews} />
      <Tab.Screen name="market-data" component={MarketData} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
