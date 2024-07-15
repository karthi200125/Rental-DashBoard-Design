import Image from "next/image"
import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-50'>
            <img alt='user' src={logo.src} className='hidden sm:flex w-8 h-8 rounded-full' />
            <h5 className='text-[18px] font-bold'>Homical</h5>
        </div>
    )
}

export default Logo