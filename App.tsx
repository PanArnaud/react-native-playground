import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext } from "./src/contexts/ThemeContext";
import MainNavigator from "./src/navigators/MainNavigator";
import { defaultMode, theme } from "./src/theme/theme";

const App = () => {
  const [navigationMode, setNavigationMode] = useState(defaultMode);
  const navigationModeData = { navigationMode, setNavigationMode };

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={navigationModeData}>
        <ThemeProvider theme={theme}>
          <NavigationContainer
            theme={navigationMode === "dark" ? DarkTheme : DefaultTheme}
          >
            <MainNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
