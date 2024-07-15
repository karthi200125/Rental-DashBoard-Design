'use client'

import React, { useRef } from 'react'
import Icon from './Icon'
import { Leftbarroutes } from '../data'
import { motion, useInView } from 'framer-motion'
import { LeftToRight } from '../animate'

const Leftbar = () => {

    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div className='hidden lg:flex ml-[15px] sticky top-0 w-[90px] bg-gray overflow-hidden' ref={ref}>
            <div
                className='w-full h-[90%] bg-white mt-[32px] flex flex-col items-center justify-between px-8 py-10 rounded-[20px]'
            >
                <div className="top flex flex-col gap-5">
                    {Leftbarroutes?.slice(0, 5)?.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={LeftToRight}
                            animate={inView ? "enter" : "exit"}
                            initial="initial"
                            custom={i}
                        >
                            <Icon key={item?.id} count={item?.count} icon={item?.icon} title={item?.title} isActive={item?.id === 1 ? true : false} ttPos={item?.ttPos} />
                        </motion.div>
                    ))}
                </div>

                <span className='w-full bg-neutral-200 h-[1px]'></span>

                <div className="top flex flex-col gap-5">
                    {Leftbarroutes?.slice(5, 7)?.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={LeftToRight}
                            animate={inView ? "enter" : "exit"}
                            initial="initial"
                            custom={i}
                        >
                            <Icon key={item?.id} count={item?.count} icon={item?.icon} title={item?.title} ttPos={item?.ttPos} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Leftbar