import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import '../styles/globalStyles.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="body">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
