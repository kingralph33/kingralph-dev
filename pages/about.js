import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function About(){
    return (
        <Layout>
            <Head>
                <title>{siteTitle}: About Me</title>
            </Head>
            <h1>Future <strong>About</strong> page</h1>
        </Layout>
    )
}