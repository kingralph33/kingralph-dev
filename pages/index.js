import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center space-y-4 dark:text-gray-200">
        <img
          src="/images/profile.png"
          className="rounded-full h-auto w-2/4"
          alt="Picture of Ralph King Jr"
        />
        <h1 className="text-2xl">Ralph King Jr</h1>
        <h2 className="text-xl">Welcome to my personal site. It's a work in progress</h2>
        <div className="space-x-4 text-sm">
                <Link href="https://twitter.com/KingRalph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm" icon={['fab', 'twitter']} size='lg' /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/ralphkingjr/">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm" icon={['fab', 'linkedin']} size='lg' /></a>
                </Link>
                <Link href="https://github.com/kingralph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm" icon={['fab', 'github']} size='lg' /></a>
                </Link>
                <Link href="https://gitlab.com/kingralph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm" icon={['fab', 'gitlab']} size='lg' /></a>
                </Link>
                <Link href="mailto:ralph@kingralph.dev">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm" icon="envelope" size='lg' /></a>
                </Link>
            </div>
      </section>
    </Layout>
  )
}
