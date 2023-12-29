import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xm: 400, // Ajout du breakpoint xm avec la valeur 400
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})