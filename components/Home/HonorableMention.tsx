import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    artist: string;
}

const HonorableMention = (props: Props) => {
    return (
        <div className='relative rounded-lg w-fit'>
            <Image src={props.image} alt='' width={200} height={150} />

            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg'></div>
            <div className='absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-2'>
                <p className='text-white text-sm font-bold'>{props.title}</p>
                <p className='text-[#ffffff61] text-sm'>{props.artist}</p>
            </div>

        </div>

    )
}

export default HonorableMention