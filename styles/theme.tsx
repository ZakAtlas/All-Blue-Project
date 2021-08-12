import { createTheme, responsiveFontSizes } from '@material-ui/core'

import 'typeface-press-start-2p'
import 'typeface-bangers'

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true // removes the `xs` breakpoint
    sm: true
    md: true
    lg: true
    xl: true
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    h1: { fontFamily: 'Bangers' }
  }
})

theme = responsiveFontSizes(theme)

export default theme
