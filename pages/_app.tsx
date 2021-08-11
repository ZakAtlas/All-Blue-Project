import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../styles/theme'

import '../styles/globalStyles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="body">
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
export default MyApp
