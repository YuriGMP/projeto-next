import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '../src/components/layout'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  ul, a{
    list-style: none; 
    text-decoration: none;
    color: white;
    padding: 0;
    }
`

const theme = {
    light: {
        colors: {
            primary: '#0070f3',
        }
    },
    dark: {
        colors: {
            primary: '#0070f3',
        }
    },
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>

        </>
    )
}