import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../keys';
import { response } from '../response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({results}) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - google search</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <header>
                <Header />
            </header>

            <SearchResults results={results} />
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || '0';

    const data = useDummyData ? response : await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json());

    // After the server has rendered, pass the results to the client
    return {
        props: {
            results: data
        }
    }
}
