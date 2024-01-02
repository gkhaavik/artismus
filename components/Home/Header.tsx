"use client";

import React from 'react'
import Searchbar from '../Searchbar'
import { FaRegBell, FaRegCalendar } from "react-icons/fa6";
import { Avatar, IconButton } from '@material-tailwind/react';
import { User } from '@/types';

type Props = {
    user: User
}

const Header = (props: Props) => {
    return (
        <div className='flex flex-row bg-[#fefefe09] w-full justify-between lg:justify-around p-4 items-center'>
            <h1 className='text-2xl font-bold'>LOGO</h1>
            {/* Searchbar */}
            <Searchbar />

            <div className='md:flex gap-2 items-center hidden'>
                {/* Notifications */}
                <IconButton onClick={() => { }} ripple={false} placeholder={undefined} size='md' className='rounded-full bg-[#fefefe17] hover:bg-[#fefefe2e] hover:cursor-pointer'>
                    <FaRegBell size={20} />
                </IconButton>

                {/* Calendar */}
                <IconButton onClick={() => { }} ripple={false} placeholder={undefined} size='md' className='rounded-full bg-[#fefefe17] hover:bg-[#fefefe2e] hover:cursor-pointer'>
                    <FaRegCalendar size={20} />
                </IconButton>

                {/* User profile */}
                <div className='flex flex-row items-center rounded-full ml-2 bg-[#fefefe17] hover:bg-[#fefefe2e] hover:cursor-pointer'>
                    <Avatar width={32} alt="User profile picture" placeholder={"https://avatars.githubusercontent.com/u/56843051?v=4"} src={props.user.image} />
                    <div className='flex flex-col px-2 mr-2'>
                        <p className='text-xs'>{props.user.username}</p>
                        <p className='text-xs font-bold'>{props.user.karma} Fans</p>
                    </div>
                </div>
            </div>

            {/* Hamburger menu */}
            <div className='flex flex-col md:hidden'>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='w-5 h-0.5 bg-white'></div>
                    <div className='w-5 h-0.5 bg-white'></div>
                    <div className='w-5 h-0.5 bg-white'></div>
                </div>
            </div>
        </div>
    )
}

export default Header