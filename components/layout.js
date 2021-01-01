import Head from 'next/head'
import Link from 'next/link'
import NavBar from './navbar'
import Footer from './footer'

// https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const name = 'Ralph King Jr'
export const siteTitle = 'KingRalph.dev'

export default function Layout({children}){
    return (
        <div className="container flex flex-col min-h-screen  max-w-4xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:bg-blue-900">
            <Head>
                <link rel="icon" href="../public/images/ralph_king_memoji.png"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/> 
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"/>
                <meta
                    name="description"
                    content="Personal Site for Ralph King Jr"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <NavBar/>
            <main className="flex-grow p-4">{children}</main>
            <Footer/>
        </div>
    )
}