import { createTheme, darkColors, lightColors } from "@rneui/themed";
import { Appearance, Platform } from "react-native";

const colorScheme = Appearance.getColorScheme();
export const defaultMode = colorScheme === "dark" ? "dark" : "light";

export const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: {
        ...darkColors.platform.ios,
      },
    }),
  },
  mode: defaultMode,
});
