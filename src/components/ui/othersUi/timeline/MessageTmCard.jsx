import Image from 'next/image'
import React from 'react'
import callImg from '../../../../assets/call.png'
import textImg from '../../../../assets/text.png'
import videoImg from '../../../../assets/video.png'

function MessageTmCard({tmDataMessage}) {
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='flex items-center gap-2 p-4 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                <Image src={tmDataMessage[1] === 'Call' ? callImg : tmDataMessage[1]=== 'Message' ? textImg : videoImg} alt='icon' width={20} height={20}/>
                <div>
                <p><span className='text-[#244D3F]'>{tmDataMessage[1]}</span> with {tmDataMessage[0]}</p>
                <p>{tmDataMessage[2]} {tmDataMessage[3]} {tmDataMessage[4]}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageTmCard