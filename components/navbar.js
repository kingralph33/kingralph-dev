import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavBar(){
    return(
        <header className="h-16 flex justify-between items-center p-4 border-double border-b-4 border-black-500 dark:text-white">
            <p className="text-2xl font-bold">Ralph King Jr</p>
            <div className="space-x-4">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/resume">
                    <a>Resume</a>
                </Link>
                <Link href="/uses">
                    <a>Uses</a>
                </Link>
            </div>
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
        </header>
    )
}