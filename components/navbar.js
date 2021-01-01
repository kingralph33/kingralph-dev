import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(){
    return(
        <header className="h-16 flex justify-between items-center p-4">
            <p className="text-2xl font-bold">Ralph King Jr</p>
            <div className="space-x-4">
                <a href="">About</a>
                <a href="">Resume</a>
                <a href="">Uses</a>
            </div>
            <div className="space-x-4 text-sm">
                <a href="">
                    <FontAwesomeIcon className="text-sm" icon={['fab', 'twitter']} size='sm' />
                </a>
                <a href="">
                    <FontAwesomeIcon className="text-sm" icon={['fab', 'linkedin']} size='sm' />
                </a>
                <a href="">
                    <FontAwesomeIcon className="text-sm" icon={['fab', 'github']} size='sm' />
                </a>
                <a href="">
                    <FontAwesomeIcon className="text-sm" icon={['fab', 'gitlab']} size='sm' />
                </a>
                <a href="">
                    <FontAwesomeIcon className="text-sm" icon="envelope" size='sm' />
                </a>
            </div>
        </header>
    )
}