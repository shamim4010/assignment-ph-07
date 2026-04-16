import Image from 'next/image'
import React from 'react'
import callImg from '../../../../assets/call.png'
import textImg from '../../../../assets/text.png'
import videoImg from '../../../../assets/video.png'

function TmCard({tmData}) {
  return (
    <div className='w-full flex flex-col gap-10'>
        <div className='flex items-center gap-2 p-4 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
            <Image src={tmData[1] === 'Call' ? callImg : tmData[1]=== 'Message' ? textImg : videoImg} alt='icon' width={20} height={20}/>
            <div>
              <p><span className='text-[#244D3F]'>{tmData[1]}</span> with {tmData[0]}</p>
              <p>{tmData[2]} {tmData[3]} {tmData[4]}</p>
            </div>
        </div>
    </div>
  )
}

export default TmCard