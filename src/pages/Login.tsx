import React from 'react'
import { useNavigate } from 'react-router-dom'

type Loginprops = {}
const Login: React.FC<Loginprops> = () => {
   const navigate = useNavigate()
    return (
        <div className='mainLogin w-full h-screen mx-auto border bg-[#5086FF] items-center  '>
          
            <div className=' md:w-[500px] sm:w-[450px] bg-white my-15 mx-auto rounded-[25px] px-10 py-10'>
                <h2 className='text-center font32 fBold  f-nutino'>Login to Account</h2>
                <p className='text-center text-[18px] mt-2.5 text-semibold f-nutino'>Please enter your email and password to continue</p>
                <form action="" className=''>
                    <div className='pt-5' >
                        <label htmlFor="email" className='text-lg text-[#202224] font-semibold f-nutino'>Email address</label>
                        <input type="email" name="email" className=' block loginEmail rounded-[10px] w-full bg-[#F1F4F9] py-2 px-2 text-xl  mt-1' id='email' placeholder='estaban_seller@gmail.com' />
                    </div>
                    <div className='pt-5' >
                        <label htmlFor="pass" className='text-lg text-[#202224] font-semibold f-nutino'>Password</label><button className='ms-[210px] text-[#202224] f-nutino'>Forget password?</button>
                        <input type="password" name="password" className=' block loginEmail rounded-[10px] w-full bg-[#F1F4F9] py-2 px-2 text-xl  mt-1' id='pass' placeholder='••••••••' />
                    </div>
                    <div className='flex item-center py-3'>
                        <input type="checkbox" name="remember" id="" className='w-4 h-4 mt-1.5 me-2  ' /> <span className='text-[#202224] text-[18px] f-nutino' >Reamember password</span>

                    </div>
                    <div className='text-center pt-5'>
                        <button type='button' className='btn bg-[#4880FF] w-90 py-2 rounded-[10px] text-white text-xl f-nutino' onClick={()=>navigate('/dashboard')} >Sign in</button>
                        <p className='py-1.5 text-[#202224]'>Don't have an Account ? <a href=""className='text-[#4880FF] f-nutino' onClick={()=>navigate('/ragistration')} >craete account</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
