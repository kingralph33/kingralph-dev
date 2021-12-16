'use strict';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/images/profile.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export const siteTitle = 'KingRalph.dev';

export default function Home() {
	return (
		<>
			<Head>
				<title data-cy='site-title'>{siteTitle}</title>
				<link rel='icon' href='../public/images/ralph_king_memoji.png' />
				<link rel='icon' href='../public/images/ralph_king_memoji.png' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta name='og:title' content={siteTitle} />
			</Head>
			<section className='md:grid md:grid-cols-2 items-center space-y-4 dark:text-gray-200'>
				<div className='order-last max-w-screen-sm md:max-w-lg h-auto'>
					<Image
						src={profilePic}
						alt={`Picture of Ralph King Jr`}
						className={`rounded-lg`}
						data-cy='homepage-profileImage'
					/>
				</div>
				<div className='text-center space-y-4'>
					<div className='flex flex-row place-content-center'>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'spring', bounce: 0.5, delay: 0.5 }}
							// Dragging
							drag
							dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
							dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
							dragElastic={0.5}
							whileTap={{ cursor: 'grabbing' }}
							className='text-gray-900 dark:text-gray-100 font-semibold pr-3'
						>
							Welcome
						</motion.h1>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'spring', bounce: 0.5, delay: 0.6 }}
							// Dragging
							drag
							dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
							dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
							dragElastic={0.5}
							whileTap={{ cursor: 'grabbing' }}
							className='text-gray-900 dark:text-gray-100 font-semibold pr-3'
						>
							to{' '}
						</motion.h1>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'spring', bounce: 0.5, delay: 0.7 }}
							// Dragging
							drag
							dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
							dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
							dragElastic={0.5}
							whileTap={{ cursor: 'grabbing' }}
							className='text-gray-900 dark:text-gray-100 font-semibold pr-3'
						>
							my{' '}
						</motion.h1>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'spring', bounce: 0.5, delay: 0.8 }}
							// Dragging
							drag
							dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
							dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
							dragElastic={0.5}
							whileTap={{ cursor: 'grabbing' }}
							className='text-gray-900 dark:text-gray-100 font-semibold'
						>
							site
						</motion.h1>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'spring', bounce: 0.5, delay: 0.5 }}
						className='space-x-4'
					>
						<Link href='https://twitter.com/KingRalph33'>
							<a target='_blank' rel='noreferrer'>
								<FontAwesomeIcon
									className='social-icons'
									icon={['fab', 'twitter']}
									size='2x'
									data-cy='homepage-twitter'
								/>
							</a>
						</Link>
						<Link href='https://www.linkedin.com/in/ralphkingjr/'>
							<a target='_blank' rel='noreferrer'>
								<FontAwesomeIcon
									className='social-icons'
									icon={['fab', 'linkedin']}
									size='2x'
									data-cy='homepage-linkedin'
								/>
							</a>
						</Link>
						<Link href='https://github.com/kingralph33'>
							<a target='_blank' rel='noreferrer'>
								<FontAwesomeIcon
									className='social-icons'
									icon={['fab', 'github']}
									size='2x'
									data-cy='homepage-github'
								/>
							</a>
						</Link>
						<Link href='https://gitlab.com/kingralph33'>
							<a target='_blank' rel='noreferrer'>
								<FontAwesomeIcon
									className='social-icons'
									icon={['fab', 'gitlab']}
									size='2x'
									data-cy='homepage-gitlab'
								/>
							</a>
						</Link>
						<Link href='mailto:ralph@kingralph.dev'>
							<a target='_blank' rel='noreferrer'>
								<FontAwesomeIcon
									className='social-icons'
									icon='envelope'
									size='2x'
									data-cy='homepage-email'
								/>
							</a>
						</Link>
					</motion.div>
				</div>
			</section>
		</>
	);
}
