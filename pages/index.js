import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import {siteTitle} from '../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Head>
        <title data-cy="site-title">{siteTitle}</title>
      </Head>
      <section className="md:grid md:grid-cols-2 items-center space-y-4 dark:text-gray-200">
        <div className="order-last max-w-screen-sm md:max-w-lg h-auto">
          <img
            alt={`Picture of Ralph King Jr`}
            src={`/images/profile.png`}
            className={`rounded-lg`}
            data-cy="homepage-profileImage"
          />
        </div>
        <div className="text-center space-y-4">
          <div className="flex flex-row place-content-center">
              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.50, delay: 0.5}}
              // Dragging
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
              className="text-gray-900 dark:text-gray-100 font-semibold pr-3">
                Welcome 
              </motion.h1>

              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.50, delay: 0.6}}
              // Dragging
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
              className="text-gray-900 dark:text-gray-100 font-semibold pr-3">
                to {" "}
              </motion.h1>

              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.50, delay: 0.7}}
              // Dragging
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
              className="text-gray-900 dark:text-gray-100 font-semibold pr-3">
                my {" "}
              </motion.h1>

              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.50, delay: 0.8}}
              // Dragging
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
              className="text-gray-900 dark:text-gray-100 font-semibold">
                site
              </motion.h1>
          </div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.50, delay: 0.5 }}
          className="space-x-4">
                <Link href="https://twitter.com/KingRalph33">
              <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icons" icon={['fab', 'twitter']} size="2x" data-cy="homepage-twitter" /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/ralphkingjr/">
              <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icons" icon={['fab', 'linkedin']} size="2x" data-cy="homepage-linkedin" /></a>
                </Link>
                <Link href="https://github.com/kingralph33">
              <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icons" icon={['fab', 'github']} size="2x" data-cy="homepage-github" /></a>
                </Link>
                <Link href="https://gitlab.com/kingralph33">
              <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icons" icon={['fab', 'gitlab']} size="2x" data-cy="homepage-gitlab" /></a>
                </Link>
                <Link href="mailto:ralph@kingralph.dev">
              <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icons" icon="envelope" size="2x" data-cy="homepage-email" /></a>
                </Link>
            </motion.div>
        </div>
      </section>
    </>
  )
}
