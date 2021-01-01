import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function About(){
    return (
        <Layout>
            <div className="dark:text-gray-200">
                <Head>
                    <title>{siteTitle}: About Me</title>
                </Head>
                <h1>Future <strong>Resume</strong> page</h1>
            </div>
        </Layout>
    )
}