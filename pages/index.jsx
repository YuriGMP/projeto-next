import Link from 'next/link'
import Header from '../src/components/header'

const Home = () => {
    return (
        <>
        < Header />
            <Link href="/sobre" ><a>Sobre</a></Link>
            
            <h1>Pagina home</h1>
            <h2>Bem vindo, aqui você encontra utilitarios</h2>

        </>
    )
}

export default Home