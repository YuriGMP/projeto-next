import { Container } from './styles'

import Footer from '../Footer'
import Header from '../header'

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <main>{ children }</main>
            <Footer />
        </Container>
    )
}

export default Layout