"use client";

import React, { useState } from 'react'
import SearchManufactures from './SearchManufactures';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SearchBarProps } from '@/types';


const SearchButton = ({otherClasses}:{otherClasses : string}) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt="magnifying-glass" width={40} height={40} className='object-contain'/>
    </button>
)

const SearchBar = ({setManufacturer, setModel} : SearchBarProps) => {

    const [searchManufacturer, setSearchManufacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchManufacturer === '' && searchModel === ''){
            return alert('PLease fill in the search bar')
        }

        setModel(searchModel)
        setManufacturer(searchManufacturer)

        // updateSearchParams(searchModel.toLowerCase(), searchManufacturer.toLowerCase())

    }

    const updateSearchParams = (searchModel: string, searchManufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search)
        
        if(searchModel){
            searchParams.set('model', searchModel)
        } else {
            searchParams.delete('model')
        }

        if(searchManufacturer){
            searchParams.set('manufacturer', searchManufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)
    } 

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufactures selected={searchManufacturer} setSelected={setSearchManufacturer}  />
                <SearchButton otherClasses="sm:hidden"/>
            </div>

            <div className='searchbar__item'>
                <Image src="/model-icon.png" width={25} height={25} alt="model-icon" className="absolute w-[20px] h-[20px] ml-4" />
                <input type='text' name='model' value={searchModel} onChange={(e)=>setSearchModel(e.target.value)} placeholder='Tiguan' className="searchbar__input"></input>
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden ml-2"/>
        </form>
    )
}

export default SearchBar;