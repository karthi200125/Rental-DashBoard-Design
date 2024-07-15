import React from 'react'
import { LiaExchangeAltSolid } from "react-icons/lia";

const FilterCon = () => {
    return (
        <div className='flex flex-row items-center gap-2 px-3 rounded-full border h-[50px] cursor-pointer hover:opacity-50 hover:shadow-xl'>
            <LiaExchangeAltSolid size={20} className='text-[var(--blue)]' />
            <h5 className='font-semibold'>Filter</h5>
            <p>(2)</p>
        </div>
    )
}

export default FilterCon