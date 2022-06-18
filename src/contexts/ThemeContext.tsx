import { createContext } from "react";
import { defaultMode } from "../theme/theme";

export interface ThemeContextData {
  navigationMode: any;
  setNavigationMode: any;
}

export const ThemeContext = createContext<ThemeContextData>({
  navigationMode: defaultMode,
  setNavigationMode: null,
});
