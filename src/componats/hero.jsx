import React from 'react';

import bg from '../assets/icons/alu.png';

import f1 from '../assets/icons/f1.png';

import f2 from '../assets/icons/f2.png';

import arr from '../assets/icons/Arrow.svg';

import book from '../assets/icons/Book Cons..svg';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const nav=useNavigate();
    return (
        <div className='pl-20 pr-20 pt-3'>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }} className='border border-gray-300 rounded-lg '>
            <h1 className='text-9xl text-[#C6DEFD] font-bold'>
                Healthcare
            </h1>
            <div className='pl-80 pr-80 flex justify-between pt-4'>
                <div className='flex'>
                    <img src={f1} alt="circle icon" className="w-6 h-6 mr-3" />
                    <p className='text-[#C6DEFD]'>Reduce Health risks</p>
                </div>
                <div className='flex'>
                <img src={f2} alt="circle icon" className="w-6 h-6 mr-3" />
                <p className='text-[#C6DEFD]'>Reduce Health risks</p> 
                </div>
            </div>
            <div className='pl-20 pr-20 mt-20 flex justify-between'>
                <div className='text-white'>
                    <p>
                    If you are looking for a creative and
                    </p>
                    <p>
                    easy way to build a website. Wow! is
                    </p>
                    <p>
                    the perfect solution.
                    </p>
                </div>
                <div className='flex'>
                    <div onClick={()=>nav('/doctorlandingpage')}>
                    <img src={book} alt="circle icon" className="w-40 h-10 mr-3" />
                    </div>
                    <div>
                    <img src={arr} alt="circle icon" className="w-10 h-10 mr-3" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;

