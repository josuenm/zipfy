import { ThemeProps } from "@lib/theme";
import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeProps {}
}
