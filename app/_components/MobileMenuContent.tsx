import { Leftbarroutes } from '../data'
import Logo from './Logo'
import me from '../assets/me.jpg'
import logo from '../assets/logo.png'

const MobileMenuContent = () => {
    return (
        <div className='w-full h-full flex flex-col justify-between'>
            <div className='pl-5 w-full flex flex-row gap-2 items-center cursor-pointer hover:opacity-50'>
                <img alt='user' src={logo.src} className='w-10 h-10 rounded-full bg-neutral-200' />
                <h3 className='font-bold'>Homical</h3>
            </div>
            <div className='flex flex-col gap-2'>
                {/* <div className='px-5 h-[50px] flex flex-row items-center gap-5 hover:bg-[var(--blue)] hover:text-white group rounded-[10px] hover:shadow-custom-shadow'>
                    <img src={me.src} alt="" className='w-10 h-10 bg-neutral-200 rounded-full object-contain' />
                    <div>
                        <h4>karthikeyan</h4>
                        <p>karthkeyan@gmail.com</p>
                    </div>
                </div> */}
                {Leftbarroutes?.slice(0, 5)?.map((item) => (
                    <div className='px-5 h-[50px] flex flex-row items-center gap-5 hover:bg-[var(--blue)] hover:text-white group rounded-[10px] hover:shadow-custom-shadow'>
                        {item?.icon}
                        <h4>{item?.title}</h4>
                    </div>
                ))}
            </div>
            <span className='w-full h-[1px] bg-neutral-200'></span>
            <div className="top flex flex-col gap-2">
                {Leftbarroutes?.slice(5, 7)?.map((item) => (
                    <div className='px-5 h-[50px] flex flex-row items-center gap-5 hover:bg-[var(--blue)] hover:text-white group rounded-[10px] hover:shadow-custom-shadow'>
                        {item?.icon}
                        <h4>{item?.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileMenuContent