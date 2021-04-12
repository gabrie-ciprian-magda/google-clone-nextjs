import { GlobeIcon } from '@heroicons/react/solid';

function Footer() {
    return (
        <footer className="bg-gray-100 text-sm text-gray-500">
            <div className="px-3 py-2 sm:px-5 sm:py-4 border-b border-gray-300">
                <p>Romania</p>
            </div>
            <div className="px-3 sm:px-5 flex flex-col sm:flex-row">
                <div className="flex mr-auto py-2 sm:py-4">
                    <p className="mr-4">Advertising</p>
                    <p className="mr-4">Business</p>
                    <p>How search works</p>
                </div>
                <div className="flex py-2 sm:py-4">
                    <p className="mr-4">Privacy</p>
                    <p className="mr-4">Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer;
