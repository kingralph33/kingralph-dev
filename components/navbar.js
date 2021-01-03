import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavBar(){
    return(
        <header className="sticky top-0 shadow-md w-full bg-gray-100 dark:bg-dark-blue max-h-28 md:max-h-18 p-4 border-double border-b-4 border-black-500 dark:border-gray-200 dark:text-gray-200 overflow-hidden">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center md:justify-between">
                <div className="">
                    <Link href="/">
                        <a className="text-base md:text-3xl text-gray-900 dark:text-gray-100 font-black hover:text-indigo-400 dark:hover:text-gray-600">King Ralph</a>
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link href="https://twitter.com/KingRalph33">
                        <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm md:text-xl text-gray-900 dark:text-gray-100 hover:text-indigo-400 dark:hover:text-gray-600" icon={['fab', 'twitter']} /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ralphkingjr/">
                        <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm md:text-xl text-gray-900 dark:text-gray-100  hover:text-indigo-400 dark:hover:text-gray-600" icon={['fab', 'linkedin']} /></a>
                    </Link>
                    <Link href="https://github.com/kingralph33">
                        <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm md:text-xl text-gray-900 dark:text-gray-100 hover:text-indigo-400 dark:hover:text-gray-600" icon={['fab', 'github']} /></a>
                    </Link>
                    <Link href="https://gitlab.com/kingralph33">
                        <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm md:text-xl text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-gray-600" icon={['fab', 'gitlab']} /></a>
                    </Link>
                    <Link href="mailto:ralph@kingralph.dev">
                        <a target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-sm md:text-xl text-gray-900 dark:text-gray-100 hover:text-indigo-400 dark:hover:text-gray-600" icon="envelope"  /></a>
                    </Link>
                </div>
            </div>
        </header>
    )
}