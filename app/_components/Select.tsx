'use client'

import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

interface SelectProps {
    options?: string[];
    icon?: any;
    title?: string
}

const Select = ({ options, icon, title }: SelectProps) => {

    const [open, setOpen] = useState(false)
    const [selecttitle, setselecttitle] = useState(title)

    return (
        <div className={`relative w-full md:w-[200px] lg:w-[150px] xl:w-[200px] h-[50px] rounded-full px-5 flex flex-row items-center bg-white gap-2 justify-between`}>
            <div className='flex flex-row items-center gap-3'>
                <div className='text-[var(--blue)]'>{icon}</div>
                <h5 className='line-clamp-1 font-bold text-[12px] whitespace-nowrap'>{selecttitle}</h5>
            </div>
            <RiArrowDownSLine className={`cursor-pointer text-neutral-400 ${open ? "rotate-180" : "rotate-0"} transition transform duration-300 ease-in-out`} size={20} onClick={() => setOpen(!open)} />

            {open &&
                <div className={`absolute z-10 w-full bottom-[-480%] left-0 flex flex-col rounded-[20px] bg-white p-2 gap-3`}>
                    {/* search options */}
                    <div className='flex flex-row items-center justify-between gap-3 h-[50px] px-3 bg-[var(--gray)] rounded-full'>
                        <div className='flex flex-row gap-2 items-center overflow-hidden'>
                            <CiSearch size={20} />
                            <input type="text" className='w-[100px] bg-gray placeholder:text-neutral-400' placeholder='search...' />
                        </div>
                        <div className='flex items-center justify-center rounded-full p-1 bg-neutral-300 cursor-pointer'>
                            <IoMdClose size={15} className='' />
                        </div>
                    </div>

                    {/* options */}
                    <div className='flex flex-col overflow-y-auto bg-white h-[150px]'>
                        {options?.map((opt, i) => (
                            <div key={i} className='capitalize h-[30px] rounded-full hover:bg-gray' onClick={() => setselecttitle("")}>{opt}</div>
                        ))}
                    </div>

                </div>
            }
        </div>
    )
}

export default Select