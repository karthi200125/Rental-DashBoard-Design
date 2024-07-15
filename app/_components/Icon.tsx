'use client';
import React from 'react';

interface IconProps {
    icon?: any;
    title?: string;
    count: number;
    isActive?: boolean;
    ttPos?: any;
}

const Icon = ({ icon, title, count, isActive, ttPos }: IconProps) => {
    return (
        <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-custom-shadow cursor-pointer hover:text-[var(--blue)] ${isActive && "shadow-custom-shadow bg-[var(--blue)] text-white "} group`}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={title}
            data-tooltip-place={ttPos || 'right'}
        >
            <div className='relative'>
                {icon}

                {count > 0 &&
                    <div className='group-hover:hidden absolute top-[-12px] right-[-15px] w-6 h-4 rounded-full flex items-center justify-center bg-blue-50 text-[var(--blue)] text-[8px]'>
                        + {count}
                    </div>
                }
            </div>
        </div>
    );
};

export default Icon;
