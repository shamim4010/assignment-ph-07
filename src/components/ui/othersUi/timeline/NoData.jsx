import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

function NoData() {
  return (
    <div className='mx-24 p-24 bg-gray-100 flex flex-col justify-center items-center gap-4 border-1 border-gray-300 rounded-md'>
        <FcDeleteDatabase className='text-7xl'/>
        <h2 className='text-3xl opacity-80'>No Timeline History</h2>
    </div>
  )
}

export default NoData