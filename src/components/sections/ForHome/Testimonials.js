import React from 'react';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img1,
            name: 'Garry Carsten',
            from: 'California'
        },

        {
            id: 2,
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img2,
            name: 'Michael Vaun',
            from: 'Wales Brussels'
        },

        {
            id: 3,
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img3,
            name: 'John Doe',
            from: 'Sudney, Melbourne'
        },
    ]
    return (
        <div className='text-[#223467] py-10 px-6 lg:px-14 bg-no-repeat bg-right-top bg-[length:200px_100px] mt-6' style={{ backgroundImage: `url(${quote})` }}>
            <h3 className='text-2xl font-semibold text-[#19d3ae]'>Testimonials</h3>
            <h1 className='text-3xl font-semibold pb-14 capitalize'>What Our patient says</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    testimonials.map(({ id, desc, img, name, from }) => (
                        <div key={id} className='p-6 shadow-md space-y-7 rounded-lg'>
                            <p className='text-justify'>{desc}</p>

                            <div className='flex items-center gap-3'>
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-emerald-600 ring-offset-base-100 ring-offset-2">
                                        <img src={img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-semibold'>{name}</p>
                                    <p className='text-sm'>{from}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials