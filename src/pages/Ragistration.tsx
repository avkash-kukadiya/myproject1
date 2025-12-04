import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { HOC } from '../componnets/HOC'
type Rprops ={}
const Ragistration:React.FC<Rprops> = () => {

    const navigate = useNavigate()
  return (
    <div>
      <div className='mainLogin w-full h-screen mx-auto border bg-[#5086FF] items-center py-10 '>
         
            <div className=' w-[500px] bg-white mx-auto rounded-[25px] px-15 py-5'>
                <h2 className='text-center  text-[32px] fBold f-nutino'>Create an Account</h2>
                <p className='text-center text-[18px] mt-2.5 text-semibold f-nutino'>Create a account to countinue</p>
                <form action="" className=''>
                    <div className='pt-4' >
                        <label htmlFor="email" className='text-lg text-[#202224] font-semibold f-nutino'>Email address</label>
                        <input type="email" name="email" className=' block loginEmail rounded-[10px] w-full bg-[#F1F4F9] py-2 px-2 text-xl  mt-1' id='email' placeholder='estaban_seller@gmail.com' />
                    </div>
                    <div className='pt-4' >
                        <label htmlFor="user" className='text-lg text-[#202224] font-semibold f-nutino'>Username</label>
                        <input type="text" name="Username" className=' block loginEmail rounded-[10px] w-full bg-[#F1F4F9] py-2 px-2 text-xl  mt-1' id='user' placeholder='Username' />
                    </div>
                    <div className='pt-4' >
                        <label htmlFor="pass" className='text-lg text-[#202224] font-semibold f-nutino'>Password</label><button className='ms-[165px] text-[#202224] f-nutino'>Forget password?</button>
                        <input type="password" name="password" className=' block loginEmail rounded-[10px] w-full bg-[#F1F4F9] py-2 px-2 text-xl  mt-1' id='pass' placeholder='••••••••' />
                    </div>
                    <div className='flex item-center py-3'>
                        <input type="checkbox" name="remember" id="" className='w-4 h-4 mt-1.5 me-2  ' /> <span className='text-[#202224] text-[18px] f-nutino' >I accapt terms and condtions</span>

                    </div>
                    <div className='text-center pt-4'>
                        <button className='btn bg-[#4880FF] w-90 py-2 rounded-[10px] text-white text-xl f-nutino'  onClick={()=>navigate('/login')} >Sign Up</button>
                        <p className='py-1.5 text-[#202224]'>Already have an Account? <a href=""className='text-[#4880FF] f-nutino'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Ragistration
