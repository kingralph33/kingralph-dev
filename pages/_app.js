import '../styles/globals.css'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {MDXProvider} from '@mdx-js/react'

library.add(fab, faEnvelope)

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  )
}
