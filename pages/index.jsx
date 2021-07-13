import Link from 'next/link'
import Layout from '../src/components/layout'

export default function Home() {
    return (
        <Layout>
            <Link href="/sobre" ><a>Sobre</a></Link>
            <h1>Pagina home</h1>
            <h2>Bem vindo, aqui você encontra utilitarios</h2>

        </Layout>
    )
}