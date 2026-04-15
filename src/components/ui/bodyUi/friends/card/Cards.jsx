import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cards({friend}) {
  return (
    <Link href={`/profile/${friend.name}`}>
        <div key={friend.id} className='shadow-[0_0_12px_rgba(0,0,0,0.5)] p-4 w-auto rounded-lg'>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <Image src={friend.picture} alt='image' width={100} height={100} className='rounded-full' />
                <h2 className='text-2xl'>{friend.name}</h2>
                <p>{friend.days_since_contact}d ago</p>
                <p>{friend.work}</p>
                <p className='flex justify-center items-center uppercase'>
                    <span className='bg-[#CBFADB] text-[#244D3F] text-[10px] px-2 py-[2px] rounded-4xl'>{friend.tags[0]}</span> <span className='bg-[#CBFADB] text-[#244D3F] text-[10px] px-2 py-[2px] rounded-4xl'>{friend.tags[1]}</span>
                </p>
                <p className={`px-2 py-[2px] rounded-4xl ${friend.status === 'Active' ? 'bg-[#EFAD44] text-white': friend.status === 'On-Track' ? 'bg-[#244D3F] text-white':'bg-[#EF4444] text-white'}`}>
                    {friend.status}
                </p>
            </div>
        </div>
    </Link>
  )
}

export default Cards