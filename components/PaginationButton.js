import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function PaginationButton() {
    const route = useRouter();
    const startIndex = Number(route.query.start) || 0;

    return (
        <div className="flex justify-items-center max-w-[570px] pt-5 border-t mb-10">
           {startIndex >= 10 && (
               <Link href={`/search?term=${route.query.term}&start=${startIndex - 10}`}>
                <div className="flex flex-column items-center cursor-pointer hover:underline text-blue-800 mr-auto">
                    <ChevronLeftIcon className='h-5' />
                    <p>Previous</p>
                </div>
               </Link>
           )}
           <Link href={`/search?term=${route.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-column items-center cursor-pointer hover:underline text-blue-800">
                    <ChevronRightIcon className='h-5' />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButton;
