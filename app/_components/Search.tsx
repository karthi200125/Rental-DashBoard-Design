import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className='flex flex-row items-center gap-2'>
            <CiSearch size={25} />
            <input type="text" className='text-[12px] w-[150px] md:w-[300px]' placeholder='Search in House , Apartmenst , villas...' />
        </div>
    )
}

export default Search