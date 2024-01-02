"use client";

import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Input } from '@material-tailwind/react';

type Props = {}

const Searchbar = (props: Props) => {
    return (
        <div className={`flex items-center bg-[#1F2839] px-2 rounded-full border-[1px] border-[#727f974e] absolute left-1/2 transform -translate-x-1/2`}>
            <CiSearch size={24} />
            <Input type='text'
                placeholder="Search artimusic"
                className="border-none text-white"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined} />
        </div>
    )
}

export default Searchbar