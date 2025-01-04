

import React from 'react';
import F1 from '../assets/icons/Frame 32.svg';

import F2 from '../assets/icons/Frame 33.svg';

import F3 from '../assets/icons/Frame 34.svg';

import F4 from '../assets/icons/Frame 35.svg';

const House = () => {
    return (
        <div className='pl-20 pr-20 pt-3 pb-10'>
            <div className='flex justify-between'>
                <div className='border border-gray-300 rounded-3xl overflow-hidden w-80 h-90 flex items-center justify-center'>
                    <img src={F1} className="w-full h-full object-contain" alt="Frame" />
                </div>
                <div className='border border-gray-300 rounded-3xl overflow-hidden w-80 h-90 flex items-center justify-center'>
                    <img src={F2} className="w-full h-full object-contain" alt="Frame" />
                </div>
                <div className='border border-gray-300 rounded-3xl overflow-hidden w-80 h-90 flex items-center justify-center'>
                    <img src={F3} className="w-full h-full object-contain" alt="Frame" />
                </div>
                <div className='border border-gray-300 rounded-3xl overflow-hidden w-80 h-90 flex items-center justify-center'>
                    <img src={F4} className="w-full h-full object-contain" alt="Frame" />
                </div>
            </div>
        </div>
    );
}

export default House;
