import { useState } from 'react';
import { AsyncPaginate } from "react-accessible-accordion";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholer="Search for the City"
            debounceTimeput={600}
            value={search}
            onChange={handleOnChange}

        />
    )
}

export default Search;