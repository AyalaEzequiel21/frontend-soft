// import {themePalette} from "@/enums/themePalette"
import { themePalette } from "@/data/themePalette"
import { ThemeProvider, createTheme } from "@mui/material"
import React from "react"

type themeProps = {
  children: React.ReactNode
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BGL
    }, 
    primary: {
      main: themePalette.PRIMARY,
      light: themePalette.PRIMARY_L,
      dark: themePalette.PRIMARY_D,
    },
    secondary: {
      main: themePalette.SECONDARY,
      light: themePalette.SECONDARY_L,
      dark: themePalette.SECONDARY_D,
    },
    text: {
      primary: themePalette.TEXT_L, 
      secondary: themePalette.TEXT_D,
    },
    info: {
      main: themePalette.TEXT_L
    }
  },
  typography: {
    fontSize: themePalette.F_SIZE, 

    h4: {
      fontSize: themePalette.F_SIZE_2
    }
  },

  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em"
        }
      }
    },
  }
})

export const ThemeConfig: React.FC<themeProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
    )
}