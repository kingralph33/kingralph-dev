import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavBar(){
    return(
        <header className="h-16 flex justify-between items-center p-4 border-double border-b-4 border-black-500 dark:text-gray-200">
            <p className="lg:text-2xl sm:text-sm font-bold">Ralph King Jr</p>
            <div className="space-x-4 lg:text-2xl sm:text-sm ">
                <Link href="/">
                    <a className="dark:hover:text-gray-600">Home</a>
                </Link>
                <Link href="/about">
                    <a className="dark:hover:text-gray-600">About</a>
                </Link>
                <Link href="/resume">
                    <a className="dark:hover:text-gray-600">Resume</a>
                </Link>
                <Link href="/uses">
                    <a className="dark:hover:text-gray-600">Uses</a>
                </Link>
            </div>
            <div className="space-x-4 lg:text-2xl sm:text-sm">
                <Link href="https://twitter.com/KingRalph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="lg:text-sm sm:text-xs dark:hover:text-gray-600" icon={['fab', 'twitter']} size='lg' /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/ralphkingjr/">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="lg:text-sm sm:text-xs dark:hover:text-gray-600" icon={['fab', 'linkedin']} size='lg' /></a>
                </Link>
                <Link href="https://github.com/kingralph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="lg:text-sm sm:text-xs dark:hover:text-gray-600" icon={['fab', 'github']} size='lg' /></a>
                </Link>
                <Link href="https://gitlab.com/kingralph33">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="lg:text-sm sm:text-xs dark:hover:text-gray-600" icon={['fab', 'gitlab']} size='lg' /></a>
                </Link>
                <Link href="mailto:ralph@kingralph.dev">
                    <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="lg:text-sm sm:text-xs dark:hover:text-gray-600" icon="envelope" size='lg' /></a>
                </Link>
            </div>
        </header>
    )
}