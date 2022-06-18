import { Button, ThemeProvider, useThemeMode } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./src/theme/theme";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const Component = (): JSX.Element => {
  const { mode, setMode } = useThemeMode();
  return (
    <Button
      style={{ paddingTop: 150 }}
      onPress={() => setMode(mode === "dark" ? "light" : "dark")}
      title={mode}
    />
  );
};

export default App;
