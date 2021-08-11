import { createTheme, responsiveFontSizes } from '@material-ui/core'

import 'typeface-press-start-2p'
import 'typeface-bangers'

let theme = createTheme({
  typography: {
    h1: { fontFamily: 'Bangers' }
  }
})

theme = responsiveFontSizes(theme)

export default theme
