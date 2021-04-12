import PaginationButton from "./PaginationButton";

function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-3 pl-[5%] sm:pl-[8.5%] md:pl-[15%] lg:pl-36">
            <p className="text-gray-500 text-sm mb-5 mt-3">About { results.searchInformation?.formattedTotalResults } results ({results.searchInformation?.formattedSearchTime} seconds)</p>

            {results.items?.map(item =>
                <div 
                    key={item.link}
                    className="max-w-xl mb-8"
                >
                    <div className="group">
                        <a href={item.link} className="text-sm">{item.formattedUrl}</a>
                        <a href={item.link} className="text-sm"><h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{item.title}</h2></a>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{item.snippet}</p>
                </div>
            )}
            <PaginationButton />
        </div>
    )
}

export default SearchResults;
