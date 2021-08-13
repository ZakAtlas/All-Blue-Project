import { createTheme, responsiveFontSizes } from '@material-ui/core'

import 'typeface-vt323'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: 'VT323'
  }
})

theme = responsiveFontSizes(theme)

export default theme
