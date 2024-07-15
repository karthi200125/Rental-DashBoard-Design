'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { perspective } from '../animate';
import { Houses } from '../data';
import Card from './Card';

const Cards = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden max-h-max' ref={ref}>
            {Houses?.map((c, i) => (
                <motion.div
                    key={i}
                    variants={perspective}
                    animate={inView ? "enter" : "exit"}
                    initial="initial"
                    custom={i}
                >
                    <Card card={c} />
                </motion.div>
            ))}
        </div>
    );
};

export default Cards;
