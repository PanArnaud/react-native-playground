import { createContext } from "react";

export interface ThemeContextData {
  navigationMode: any;
  setNavigationMode: any;
}

export const ThemeContext = createContext<ThemeContextData>({
  navigationMode: "light",
  setNavigationMode: null,
});
