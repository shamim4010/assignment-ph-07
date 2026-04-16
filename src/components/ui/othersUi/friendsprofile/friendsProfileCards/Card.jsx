import Image from 'next/image'
import React, { useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoVideocamOutline } from 'react-icons/io5'
import { MdDeleteOutline, MdOutlineArchive } from 'react-icons/md'
import { RiMessage2Line, RiNotificationSnoozeLine } from 'react-icons/ri'

function Card({friend}) {

    const clickHandler = (name, m) => {
        const date = new Date();
        const time = date.toLocaleTimeString();
        const month = date.toLocaleString('en-US', {month: 'long'});
        const year = date.getFullYear();
        
        const oldData = JSON.parse(localStorage.getItem('timelineData')) || [];
        /* console.log(name, m) */
        const newData = [[name, m, time, month, year], ...oldData];
        
        localStorage.setItem('timelineData', JSON.stringify(newData))
    }

    return (
        <div className='flex flex-col justify-center gap-10 p-8 m-24 rounded-2xl  shadow-[0_0_20px_rgba(0,0,0,0.3)] lg:flex-row'>
        <div className='flex flex-col justify-center items-center text-center gap-5'>
                <div className='flex flex-col justify-center items-center text-center p-4 rounded-md gap-3 shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                    <Image src={friend.picture} alt='Profile' width={100} height={100} className='rounded-full' />
                    <h3>{friend.name}</h3>
                    <p className={`px-2 py-[2px] rounded-4xl ${friend.status === 'Almost Due' ? 'bg-[#EFAD44] text-white': friend.status === 'On-Track' ? 'bg-[#244D3F] text-white':'bg-[#EF4444] text-white'}`}>
                        {friend.status}
                    </p>
                    <p className='flex justify-center items-center uppercase'>
                        <span className='bg-[#CBFADB] text-[#244D3F] text-[10px] px-2 py-[2px] rounded-4xl'>{friend.tags[0]}</span> <span className='bg-[#CBFADB] text-[#244D3F] text-[10px] px-2 py-[2px] rounded-4xl'>{friend.tags[1]}</span>
                    </p>
                    <i className='opacity-80 text-[11px]'>"{friend.bio}"</i>
                    <p className='opacity-80'>Preferred: email</p>
                </div>
                <hr className='opacity-20 w-full'/>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-center items-center gap-2 p-2 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                    <RiNotificationSnoozeLine /> <p>Snooze {friend.days_since_contact >= 7 ? '1 Weeks':friend.days_since_contact >= 14 ? '2 Weeks': friend.days_since_contact >= 21 ? '3 Weeks':`${friend.days_since_contact} Days`}</p> 
                    </div>
                    <div className='flex justify-center items-center gap-2 p-2 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]'><MdOutlineArchive /> <p>Archive</p></div>
                    <div className='flex justify-center items-center gap-2 p-2 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]'><MdDeleteOutline /> <p>Delete</p></div>
                </div>
        </div>
        <div className='flex flex-col justify-between items-center gap-2'>
                <div className='flex justify-center flex-wrap gap-6 p-8 text-center'>
                    <div className=' w-40 py-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                        <h3 className='text-2xl font-bold text-[#244D3F]'>{friend.days_since_contact}</h3>
                        <p className='opacity-80'>Days Since Contact</p>
                    </div>
                    <div className=' w-40 py-1  shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                        <h3 className='text-2xl font-bold text-[#244D3F]'>{friend.goal}</h3>
                        <p className='opacity-80'>Goal (Days)</p>
                    </div>
                    <div className=' w-40 py-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                        <h3 className='text-2xl font-bold text-[#244D3F]'>{friend.next_due_date}</h3>
                        <p className='opacity-80'>Next Dua</p>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center p-8 shadow-md rounded-md'>
                    <div>
                        <h3 className='text-sm text-[#244D3F] font-semibold'>Relationship Goal</h3>
                        <p className='opacity-80'>Contact every {friend.goal}</p>
                    </div>
                    <button className='btn border-gray-200 text-xs opacity-80'>Edit</button>
                </div>
                <div className='w-full px-8'>
                    <p>Quick Check-in</p>
                    <div className='flex flex-wrap justify-center gap-4 p-8'>
                        <div onClick={()=> clickHandler(friend.name, 'Call')} className='w-40 flex flex-col items-center justify-center py-1.5 shadow-[0_0_12px_rgba(0,0,0,0.2)] cursor-pointer active:scale-[0.9]'>
                            <FiPhoneCall />
                            <p>Call</p>
                        </div>
                        <div onClick={()=> clickHandler(friend.name, 'Message')} className='w-40 flex flex-col items-center justify-center py-1.5 shadow-[0_0_12px_rgba(0,0,0,0.2)] cursor-pointer active:scale-[0.9]'>
                            <RiMessage2Line />
                            <p>Message</p>
                        </div>
                        <div onClick={()=> clickHandler(friend.name, 'Video')} className='w-40 flex flex-col items-center justify-center py-1.5 shadow-[0_0_12px_rgba(0,0,0,0.2)] cursor-pointer active:scale-[0.9]'>
                            <IoVideocamOutline />
                            <p>Video</p>
                        </div>
                    </div>
                </div>
        </div> 
        </div>
    )
}

export default Card