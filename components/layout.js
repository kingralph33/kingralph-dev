'use strict';

import Head from 'next/head';
import Footer from './footer';
import NavBar from './navbar';

export const siteTitle = 'KingRalph.dev';

export default function Layout({ children }) {
	return (
		<div className='bg-gray-50 dark:bg-dark-blue'>
			<div className='container flex flex-col min-h-screen mx-auto'>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />
					<meta name='og:title' content={siteTitle} />
				</Head>
				<NavBar />
				<main className='flex-grow mt-4 p-4'>{children}</main>
				<Footer />
			</div>
		</div>
	);
}
