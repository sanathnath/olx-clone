import { createContext, useState } from 'react';

export const SearchContext = createContext();

function Search({children}) {
    const [SearchInput, setSearchInput] = useState('')
    return (
        <SearchContext.Provider value={{SearchInput,setSearchInput}}>
            {children}
        </SearchContext.Provider>
    )
}

export default Search
