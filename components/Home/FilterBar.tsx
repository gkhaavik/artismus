"use client";

import React, { useState } from 'react'
import { HotIcon, NewIcon, TopIcon } from '../Icons';
import { Option, Select } from '@material-tailwind/react';

type Props = {}

const FilterBar = (props: Props) => {
  const [selected, setSelected] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setSelected(index);
    // Perform any other actions based on the selected index
  };

  return (
    <div className='flex justify-between bg-[#1F2839] p-4 rounded-lg space-x-full'>
      {/* Options */}
      <div className='flex flex-row gap-2'>
        <div
          className={`px-6 py-2 rounded-full ${selected === 0 ? 'bg-[#fefefe0a] shadow-md text-[#cec7fe]' : 'text-[#fff2]'
            }`}
          onClick={() => handleItemClick(0)}
        >
          <NewIcon width={24} />
        </div>
        <div
          className={`px-6 py-2 rounded-full ${selected === 1 ? 'bg-[#fefefe0a] text-[#fe753a] shadow-md' : 'text-[#fff2]'
            }`}
          onClick={() => handleItemClick(1)}
        >
          <HotIcon width={24} classes={`shadow-md`} />
        </div>
        <div
          className={`px-6 py-2 rounded-full ${selected === 2 ? 'bg-[#fefefe0a] text-[#ebc656] shadow-md' : 'text-[#fff2]'
            }`}
          onClick={() => handleItemClick(2)}
        >
          <TopIcon width={24} />
        </div>
      </div>

      {/* Time Period Dropdown */}
      <Select
        name='time-period'
        placeholder="Today"
        className="border-none bg-[#fefefe0a] shadow-md text-white rounded-full"
        labelProps={{
          className: "before:content-none after:content-none",
        }}>
        <Option>Today</Option>
        <Option>This Week</Option>
        <Option>This Month</Option>
        <Option>This Year</Option>
        <Option>All Time</Option>
      </Select>
    </div>
  )
}

export default FilterBar