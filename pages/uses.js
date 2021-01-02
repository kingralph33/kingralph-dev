import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function About(){
    return (
        <Layout>
            <Head>
                <title>{siteTitle}: About Me</title>
            </Head>
            <h1 className="dark:text-gray-200">Future <strong>Uses</strong> page</h1>
        </Layout>
    )
}