import React from 'react'
import { FadeLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='flex justify-center items-center m-24'><FadeLoader /></div>
  )
}

export default Loading