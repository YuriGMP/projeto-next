import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '../src/components/layout'

const theme = {
    colors: {
        primary: '#b0b0b0',
        secondary: '#ffffff',
    },
    backgrounds: {
        primary: '#313131',
        secondary: '#000000ba',
    }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${ props => props.theme.colors.primary };
    background-color: ${ props => props.theme.backgrounds.primary }
  }

  ul, a{
    list-style: none; 
    text-decoration: none;
    color: white;
    padding: 0;
    }
`


export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>

        </>
    )
}