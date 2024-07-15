import Image from 'next/image'
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";

const Card = ({ card }: any) => {
    return (
        <div className='w-full h-[350px] rounded-[20px] p-2 bg-white overflow-hidden flex flex-col gap-3 group cursor-pointer hover:shadow-custom-shadow transition transform duration-300 ease-in-out'>
            <div className='relative w-full h-[80%] rounded-[20px] bg-neutral-200 overflow-hidden'>
                <Image alt='' src={card?.img} className='w-ful h-full object-cover bg-neutral-200 brightness-110 saturate-150 group-hover:blur-xl' fill />
                <div className='rounded-[20px] group-hover:glass absolute top-0 left-0 w-full h-full flex items-center justify-between flex-col p-5'>
                    <div className='w-full flex flex-row items-center justify-between'>
                        <div className='glass text-white w-10 h-10 rounded-full flex items-center justify-center'>
                            <FaHeart size={18} />
                        </div>
                        <div className='glass text-white max-w-max px-5 h-10 rounded-full flex flex-row items-center gap-2'>
                            <FaStar size={18} />
                            <h5 className='text-[10px]'>5.00</h5>
                        </div>
                    </div>
                    <div className='glass text-white px-5 h-12 rounded-full flex flex-row items-center gap-2 hover:bg-[var(--blue)]'>
                        <CiMap size={25} />
                        <h5 className='text-[10px]'>Show On Map</h5>
                    </div>
                    <div className='glass text-white flex flex-row items-center gap-2 h-6 px-3 rounded-full'>
                        <span className='w-1 h-1 rounded-full bg-white'></span>
                        <span className='w-1 h-1 rounded-full bg-white'></span>
                        <span className='w-1 h-1 rounded-full bg-white'></span>
                    </div>
                </div>
            </div>
            <div className='w-full py-2 px-5'>
                <h5 className='font-bold capitalize line-clamp-1'>{card?.title}</h5>
                <div className='flex flex-row items-center justify-between gap-3'>
                    <p className='text-[12px] line-clamp-1'>{card?.address}</p>
                    <h5 className='font-bold w-[100px]'>$ {card?.price} <b className='text-[10px] text-neutral-300'>Total</b></h5>
                </div>
            </div>
        </div>
    )
}

export default Card