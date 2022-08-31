import { DefaultTheme } from "@react-navigation/native";

export const theme = {
  colors: {
    primary: "#00B2FF",
  },

  fontWeight: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    bold: "Inter_700Bold",
  },

  navigationTheme: {
    ...DefaultTheme,
    colors: {
      background: "transparent",
    },
  },
};

export type ThemeProps = typeof theme;
