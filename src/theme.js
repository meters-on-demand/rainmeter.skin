import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  fontFamily: {
    body: "Quicksand",
  },
  colorSchemes: {
    light: {
      primary: {
        50: "#bfdba9",
        100: "#90c069",
        200: "#70ae3e",
        300: "#60a529",
        400: "#60a529",
        500: "#569525",
        600: "#4d8421",
        700: "#4d7c0f",
        800: "#3a6319",
        900: "#305315",
      },
    },
    dark: {
      primary: {
        50: "#bfdba9",
        100: "#90c069",
        200: "#70ae3e",
        300: "#60a529",
        400: "#60a529",
        500: "#569525",
        600: "#4d8421",
        700: "#4d7c0f",
        800: "#3a6319",
        900: "#305315",
      },
    },
  },
});

export default theme;
