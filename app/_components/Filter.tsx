import React from 'react'
import Search from './Search'
import Category from './Category'
import FilterCon from './FilterCon'

const Filter = () => {
    return (
        <div className='md:sticky p-[16px] md:p-0 left-0 md:top-[80px] w-full h-[80px] bg-white flex flex-row items-center gap-3 justify-between'>
            <Search />
            <div className='flex flex-row items-center gap-3'>
                <h5 className='hidden xl:flex'>Recomeded:</h5>
                <Category />
                <FilterCon />
            </div>
        </div>
    )
}

export default Filter