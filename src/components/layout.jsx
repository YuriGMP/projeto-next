import Link from 'next/link'
import styled from 'styled-components'

const LayoutStyle = styled.div`
    background-color: #00000078;
`

const Layout = ({ children }) => {

    const itemsNav = (...pages) => pages.map( name => name.toLowerCase() == 'home' 
    ? { name , path:'/'} 
    : { name , path: name.toLowerCase()} )

    const nav = itemsNav('Home', 'Produtos', 'Sobre')

    console.log(nav)

    return (
        <LayoutStyle>
            <header>
                <div className="content">
                    <div className="logo">

                    </div>

                    <nav>
                        <ul>
                            {nav.map(el=> (
                                <li>
                                    <Link href={el.path} >{el.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </LayoutStyle>
    )
}

export default Layout