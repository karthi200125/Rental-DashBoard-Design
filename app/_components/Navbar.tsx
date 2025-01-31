'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TopToBottom } from '../animate'
import me from '../assets/me.jpg'
import { NavIcons, NavTopLinks } from '../data'
import Icon from './Icon'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {

    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div className='z-20 p-[16px] md:p-0 sticky left-0 top-0 w-full h-[80px] bg-white flex flex-row items-center justify-between border-b border-neutral-200' ref={ref}>
            <div className='flex flex-row items-center gap-[50px]'>
                <div className='flex flex-row items-center gap-3'>
                    <Menu />
                    <Logo />
                </div>
                <span className='hidden lg:flex h-[25px] w-[1px] bg-neutral-200'></span>
                <div className='hidden lg:flex flex-row items-center gap-10'>
                    {NavTopLinks?.map((ntl, i) => (
                        <motion.h5
                            key={i}
                            variants={TopToBottom}
                            animate={inView ? "enter" : "exit"}
                            initial="initial"
                            custom={i}
                            className='cursor-pointer font-semibold hover:opacity-50'
                        >
                            {ntl?.title}
                        </motion.h5>
                    ))}
                </div>
            </div>
            <div className='flex flex-row items-center gap-5'>
                <div className='hidden sm:flex flex-row items-center gap-2'>
                    {NavIcons?.map((navicon, i) => (
                        <motion.div
                            key={i}
                            variants={TopToBottom}
                            animate={inView ? "enter" : "exit"}
                            initial="initial"
                            custom={i}
                        >
                            <Icon count={navicon?.count} key={navicon?.id} title={navicon?.title} icon={navicon?.icon} ttPos={navicon?.ttPos} />
                        </motion.div>
                    ))}
                </div>
                <span className='hidden md:flex mx-5 h-[25px] w-[1px] bg-neutral-200'></span>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img src={me.src} alt="" className='w-full h-full bg-neutral-200' />
                </div>
            </div>
        </div>
    )
}

export default Navbar