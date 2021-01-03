import Head from 'next/head'
import Link from 'next/link'
import {siteTitle} from '../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="md:grid md:grid-cols-2 items-center space-y-4 dark:text-gray-200">
        <div className="order-last px-4">
          <img
            src="/images/profile.png"
            className="shadow-lg max-w-full h-auto align-middle border-none"
            alt="Picture of Ralph King Jr"
          />
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-2xl text-gray-900 dark:text-gray-100">Welcome to my site.</h2>
          <div className="space-x-4">
                <Link href="https://twitter.com/KingRalph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-gray-600" icon={['fab', 'twitter']} size="2x" /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/ralphkingjr/">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-gray-600" icon={['fab', 'linkedin']} size="2x" /></a>
                </Link>
                <Link href="https://github.com/kingralph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-gray-600" icon={['fab', 'github']} size="2x" /></a>
                </Link>
                <Link href="https://gitlab.com/kingralph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-gray-600" icon={['fab', 'gitlab']} size="2x" /></a>
                </Link>
                <Link href="mailto:ralph@kingralph.dev">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-gray-600" icon="envelope" size="2x" /></a>
                </Link>
            </div>
        </div>
      </section>
    </>
  )
}
