import React from 'react';
import { SearchBarComp, SearchBarInput } from './SearchBarStyle.js';

const SearchBar = (props) => {
    return (
        <SearchBarComp>
            <SearchBarInput type="text" value={props.value} onChange={props.change} placeholder={props.placeholder} disabled={props.active}/>
        </SearchBarComp>
    )
}

export default SearchBar;