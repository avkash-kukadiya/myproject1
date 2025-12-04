import React from 'react'
import { HOC } from '../componnets/HOC'

const Inbox:React.FC = () => {
  return (
    <div className='w-full p-5  bg-[#F2F3F7]'>
        <h2 className='text-2xl font-semibold mb-6'>Inbox</h2>
        <div>    </div>
      
    </div>
  )
}

export default HOC(Inbox)
