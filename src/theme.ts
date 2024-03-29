import baseStyled, {
  ReactNativeStyledInterface
} from "styled-components/native";
import { Platform } from "react-native";

export const THEME_PREFIX = Platform.OS === "ios" ? "ios" : "md";

export const theme = {
  primary: "#002B39",
  darkShade: "#065D6F",
  darkAccent: "#043C47",
  activeTint: "#FFFFFF",
  inactiveTint: "#809DA2",
  dimmedTint: "rgba(255,255,255,0.16)",
  info: "#E8F1F2",
  success: "#258874",
  warning: "#F77F00",
  submit: "#258874",
  submitGradient: ["#258874", "#185A4D"],
  danger: "#BD2F3A",
  dangerGradient: ["#BD2F3A", "#7E2027"],
  action: "#1481BA",
  actionGradient: ["#1481BA", "#0F5E88"],
  actionShadow: "#0e3d5b"
};

export type Theme = typeof theme;
export const styled = baseStyled as ReactNativeStyledInterface<Theme>;
