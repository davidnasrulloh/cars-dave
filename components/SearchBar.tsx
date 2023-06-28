"use client";

import React, { useState } from 'react'
import SearchManufactures from './SearchManufactures';


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState("");

    const handleSearch = () => {}

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufactures setManufacturer={setManufacturer} manufacturer={manufacturer}  />
            </div>
        </form>
    )
}

export default SearchBar;