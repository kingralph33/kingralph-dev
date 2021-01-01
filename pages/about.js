import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function About(){
    return (
        <Layout>
            <Head>
                <title>{siteTitle}: About Me</title>
            </Head>
            <h1>Future about page</h1>
        </Layout>
    )
}