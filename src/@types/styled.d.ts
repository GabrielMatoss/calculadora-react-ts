import "styled-components";
import { defaultColors } from "../styles/themes/default";

type DefaultColorsProject = typeof defaultColors;

declare module "styled-components" {
    export interface DefaultTheme extends DefaultColorsProject {}
}