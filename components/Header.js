import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) {
            return;
        }
        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image 
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
                    width={90}
                    height={31}
                    className='cursor-pointer'
                    onClick={() => router.push('/')}
                />
                <form className='flex flex-grow px-6 py-3 ml-5 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type="text" defaultValue={router.query.term} />
                    <XIcon 
                        className='h-5 mr-0 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-125' 
                        onClick={() =>searchInputRef.current.value = ''}
                    />
                    <MicrophoneIcon 
                        className='h-5 mr-3 text-blue-500 border-l-2 border-gray-200 pl-3 cursor-pointer hidden sm:inline-flex'
                    />
                    <SearchIcon
                        className='h-5 text-gray-500 cursor-pointer hidden sm:inline-flex transition duration-150 transform hover:scale-125'
                    />
                    <button type='submit' onClick={search} hidden>Search</button>
                </form>
                <Avatar className='ml-auto' url="https://randomuser.me/api/portraits/men/32.jpg" />
            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header;
