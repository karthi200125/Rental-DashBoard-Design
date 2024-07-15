'use client'

import React, { useRef } from 'react'
import { categoryItems } from '../data'
import { motion, useInView } from 'framer-motion'
import { TopToBottom } from '../animate'

const Category = () => {

    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div className='hidden lg:flex flex-row items-center gap-3' ref={ref}>
            {categoryItems?.map((cat, i) => (
                <motion.div
                    key={i}
                    variants={TopToBottom}
                    animate={inView ? "enter" : "exit"}
                    initial="initial"
                    custom={i}
                    className={`w-[100px] rounded-full bg-gray h-[50px] flex items-center justify-center cursor-pointer text-[12px] font-semibold hover:bg-[var(--blue)] hover:text-white`}
                >
                    {cat?.title}
                </motion.div>
            ))}
        </div>
    )
}

export default Category