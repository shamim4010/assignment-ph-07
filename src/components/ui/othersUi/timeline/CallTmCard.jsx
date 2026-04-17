import Image from 'next/image'
import React from 'react'
import callImg from '../../../../assets/call.png'
import textImg from '../../../../assets/text.png'
import videoImg from '../../../../assets/video.png'

function CallTmCard({tmDataCall}) {
    console.log(tmDataCall)
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='flex items-center gap-2 p-4 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                <Image src={tmDataCall[1] === 'Call' ? callImg : tmDataCall[1]=== 'Message' ? textImg : videoImg} alt='icon' width={20} height={20}/>
                <div>
                <p><span className='text-[#244D3F]'>{tmDataCall[1]}</span> with {tmDataCall[0]}</p>
                <p>{tmDataCall[2]} {tmDataCall[3]} {tmDataCall[4]}</p>
                </div>
            </div>
        </div>
    )
}

export default CallTmCard