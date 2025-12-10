import React from 'react'
import { HOC } from '../componnets/HOC'
import { CiMail } from 'react-icons/ci'

const Inbox: React.FC = () => {
  return (
    <div className='w-full p-5  bg-[#F2F3F7]'>
      <h2 className='text-2xl font-semibold mb-6'>Inbox</h2>
      <div className=' border-danger border flex w-full  '>
        <div className='w-[20%] sidetabs  border border-green-500     '>
                 <ul className='tabs'>
                  <li className='tab'>
                    <a href="" className='text-center '><div className='flex items-center text-center w-full'><CiMail />Inbox</div></a>
                  </li>
                 </ul>
        </div>
        <div className='w-[80%] border border-red-500'> 

        </div>
      </div>

    </div>
  )
}

export default HOC(Inbox)
