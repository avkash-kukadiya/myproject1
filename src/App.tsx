// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
// import { HOC } from './componnets/HOC'
import Login from './pages/Login'
import Ragistration from './pages/Ragistration'
import Product from './pages/Product'
import Favorites from './pages/Favorites'
import Inbox from './pages/Inbox'
import Pricing from './pages/Pricing'
import ProductStock from './pages/ProductStock'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
               <Route path='/' element={ <Navigate  to={"/dashboard"}  />} />
               <Route path='/dashboard' element={ <Dashboard/>} ></Route>
               <Route path='/product' element={ <Product/>} />
               <Route path='/favorites' element={ <Favorites/>} />
               <Route path='/inbox' element={ <Inbox/>} />
               <Route path='/productStock' element={ <ProductStock/>} />
               <Route path='/pricing' element={ <Pricing/>} />
               {/* <Route path='/' element={ <Navigate  to={"/login"}  />} /> */}
               <Route path='/login' element={ <Login/>} />
               <Route path='/ragistration' element={ <Ragistration/>} />
        </Routes>
       
       </BrowserRouter>
      {/* <Login/> */}
      {/* <Ragistration/> */}
      {/* <Dashboard/> */}
      {/* <HOC/> */}
    </>
  )
}

export default App
