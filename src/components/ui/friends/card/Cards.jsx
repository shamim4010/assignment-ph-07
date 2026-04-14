import Image from 'next/image'
import React from 'react'

function Cards({friend}) {
  return (
    <div key={friend.id} className='shadow-[0_0_12px_rgba(0,0,0,0.5)] p-4 w-auto rounded-lg'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src={friend.picture} alt='image' width={100} height={100} className='rounded-full' />
            <h2 className='text-2xl'>{friend.name}</h2>
            <p>{friend.days_since_contact}d ago</p>
            <p>{friend.work}</p>
            <p>
                <span className='bg-[#CBFADB] text-[#244D3F] px-2 py-[2px] rounded-4xl'>{friend.tags[0]}</span> <span className='bg-[#CBFADB] text-[#244D3F] px-2 py-[2px] rounded-4xl'>{friend.tags[1]}</span>
            </p>
            <p>
                {friend.status}
            </p>
        </div>
    </div>
  )
}

export default Cards