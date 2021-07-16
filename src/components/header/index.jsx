import Link from 'next/link'

import { Container, Nav } from './styles'

const Header = () => {
    return (
        <>
        <Container>
            <div className='content-header'>
                <div className="logo">
                    <Link href='/' >
                        <h3>Site</h3>
                    </Link>
                </div>

                <Nav>
                    <ul className="navbar">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/sobre'>Sobre</Link>
                        </li>
                    </ul>
                </Nav>

            </div>
        </Container>
        </>
    )
}

export default Header