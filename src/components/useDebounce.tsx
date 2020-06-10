import React, { useState, useEffect } from 'react';

function useDebounce(value: any, delay: any) {
    // state and setters for debounced value
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        // update debounce value after delay
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        // cancel timeout if value changes (also on delay change or unmount)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debounceValue
}

// API search function
function searchCharacters(search: any) {
    const apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
    return fetch(
        `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`,
        {
            method: 'GET'
        }
    )
        .then(r => r.json())
        .then(r => r.data.results)
        .catch(error => {
            console.error(error);
            return [];
        });
}

function TestUseDebounce() {
    // State and setters for ...
    // Search term
    const [searchTerm, setSearchTerm] = useState('');
    // API search results
    const [results, setResults] = useState<any>([]);
    // Searching status (whether there is pending API request)
    const [isSearching, setIsSearching] = useState(false);
    // Debounce search term so that it only gives us latest value ...
    // ... if searchTerm has not been updated within last 500ms.
    // The goal is to only have the API call fire when user stops typing ...
    // ... so that we aren't hitting our API rapidly.
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Effect for API call 
    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);
                searchCharacters(debouncedSearchTerm).then(results => {
                    setIsSearching(false);
                    setResults(results);
                });
            } else {
                setResults([]);
            }
        },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    return (
        <div>
            <input
                placeholder="Search Marvel Comics"
                onChange={e => setSearchTerm(e.target.value)}
            />

            {isSearching && <div>Searching ...</div>}

            {results.map((result: any) => (
                <div key={result.id}>
                    <h4>{result.title}</h4>
                    <img
                        alt=""
                        src={`${result.thumbnail.path}/portrait_incredible.${
                            result.thumbnail.extension
                            }`}
                    />
                </div>
            ))}
        </div>
    );
}
export default TestUseDebounce
