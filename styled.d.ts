import "styled-components/native";
import { AppColors } from "./theme";
import {
  AppFonts,
  AppFontSizes,
  AppFontWeight,
} from "./src/infrastructure/theme/fonts";
import { AppLineHeights, AppSpace } from "./src/infrastructure/theme/spacing";
import { AppSizes } from "./src/infrastructure/theme/sizes";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: AppColors;
    fonts: AppFonts;
    fontSizes: AppFontSizes;
    fontWeights: AppFontWeight;
    space: AppSpace;
    lineHeights: AppLineHeights;
    sizes: AppSizes;
  }
}
