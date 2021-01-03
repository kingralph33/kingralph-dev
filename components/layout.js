import Head from 'next/head'
import NavBar from './Navbar'
import Footer from './Footer'

// https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export const siteTitle = 'KingRalph.dev'

export default function Layout({children}){
    return (
        <div className="bg-gray-50 dark:bg-dark-blue">
            <div className="container flex flex-col min-h-screen mx-auto">
                <Head>
                    <link rel="icon" href="../public/images/ralph_king_memoji.png"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <meta name="og:title" content={siteTitle} />
                </Head>
                <NavBar />
                <main className="flex-grow mt-4 p-4">{children}</main>
                <Footer/>
            </div>
        </div>
    )
}