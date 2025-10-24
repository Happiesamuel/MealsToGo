import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

const defaultTextStyles = (theme: DefaultTheme) => `
font-family:${theme.fonts.body};
font-weight:${theme.fontWeights.regular};
color:${theme.colors.text.primary};
flex-wrap:wrap;
margin-top:0px;
margin-bottom:0px;
`;
const body = (theme: DefaultTheme) => `
font-size:${theme.fontSizes.body};
`;
const hint = (theme: DefaultTheme) => `
font-size:${theme.fontSizes.body};
`;
const error = (theme: DefaultTheme) => `
color:${theme.colors.text.error};
`;
const label = (theme: DefaultTheme) => `
font-size:${theme.fontSizes.body};
font-weight:${theme.fontWeights.medium};
`;
const caption = (theme: DefaultTheme) => `
font-size:${theme.fontSizes.caption};
font-weight:${theme.fontWeights.bold};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

type VariantType = keyof typeof variants;
interface TextProps {
  variant?: VariantType;
}

export const Text = styled.Text<TextProps>`
  ${(props) => defaultTextStyles(props.theme)}
  ${(props) => variants[props.variant || "body"](props.theme)}
`;
