import React from 'react'
import { categoryItems } from '../data'

const Category = () => {
    return (
        <div className='hidden lg:flex flex-row items-center gap-3'>
            {categoryItems?.map((cat) => (
                <div
                    key={cat?.id}
                    className={`w-[100px] rounded-full bg-gray h-[50px] flex items-center justify-center cursor-pointer text-[12px] font-semibold hover:bg-[var(--blue)] hover:text-white`}
                >
                    {cat?.title}
                </div>
            ))}
        </div>
    )
}

export default Category