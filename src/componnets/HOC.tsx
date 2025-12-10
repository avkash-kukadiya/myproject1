// export const HOC = <P extends object>(Component<p>) => {
//     const Newcomponet = () => {
//         return (
//             <>

import { FiHeart } from "react-icons/fi";
import { RxGrid, RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import { SlSpeedometer } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import flag from '../assets/img/Flag.png'
import bellicon from '../assets/img/icon.png'
import { FaAngleDown } from "react-icons/fa";
import more from '../assets/img/More.png'
import { IoMdChatboxes } from "react-icons/io";
import { HiOutlineGift } from "react-icons/hi";
import { LiaDatabaseSolid } from "react-icons/lia";
// import { RiCompass2Line } from "react-icons/ri";
// import { BiBadge } from "react-icons/bi";

export const HOC = <P extends object>(Component: React.ComponentType<P>) => {
    const NewComponent: React.FC<P> = (props) => {
        return (
            <>
                <div className="hoc  flex   ">
                    <div className="Sidebar fixed w-[17%]  h-screen">
                        <div className="maintitle  text-center">
                            <h2 className="text-[#202224] text-2xl boldh1 my-4"><span className="text-[#4880FF]">Dash</span>Salck</h2>
                        </div>

                        <ul>
                            <NavLink to='/dashboard'>
                                <li className=" flex  items-center  ">
                                    <SlSpeedometer className="me-6 sideic  " /> Dashboard
                                </li>
                            </NavLink>

                            <NavLink to='/product'>
                                <li className=" flex  items-center  ">
                                    <RxGrid className="me-6 sideic " /> Products
                                </li>
                            </NavLink>
                            <NavLink to='/favorites'>
                                <li className=" flex  items-center  ">
                                    <FiHeart className="me-6 sideic " /> Favorites
                                </li>
                            </NavLink>
                            <NavLink to='/inbox'>
                                <li className=" flex  items-center  ">
                                    <IoMdChatboxes className="me-6 sideic " /> Inbox
                                </li>
                            </NavLink>
                            <NavLink to='/productStock'>
                                <li className=" flex  items-center  ">
                                    <LiaDatabaseSolid  className="me-6 sideic " /> ProductStock
                                </li>
                            </NavLink>
                            <hr className="mx-3 text-[#F2F3F7] mb-2" />

                            <NavLink to='/pricing'>
                                <li className=" flex  items-center  ">
                                    <HiOutlineGift  className="me-6 sideic " /> Pricing
                                </li>
                            </NavLink>

                            <NavLink to='/todo'>
                                <li className=" flex  items-center  ">
                                    <HiOutlineGift  className="me-6 sideic " /> To-Do List
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="main  w-[83%] ms-auto">
                        <header className=" header mt-0 z-20   fixed flex bg-white  justify-between">
                            <div className="nav flex justify-content-around item items-center grow">
                                <div className=" headmenu text-2xl px-8">
                                    <RxHamburgerMenu />
                                </div>
                                <div className="searach  flex bg-[#D5D5D5] py-2.5 px-3 rounded-[25px]  lg:w-[60%]">
                                    <RxMagnifyingGlass className="text-2xl align-middle " />
                                    <input type="text" name="searach" className="border-0 ps-2 searachic text-1xl lg:w-[80%]" />
                                </div>
                            </div>
                            <div className="tabseee py-2    ">
                                <div className=" flex items-center shrink-0 ">
                                    <div className="notification mx-5  relative  ">
                                        <img src={bellicon} alt="" width={'25px'} className="shrink-0" />
                                        <span className="badge absolute -top-2.5 left-3.5 flex bg-[#F93C65] text-md text-white items-center justify-center w-[18px] h-[18px] rounded-[50%] ">
                                            6
                                        </span>
                                        {/* <BiBadge color="failure">Failure</Badge> */}
                                    </div>
                                    <div className="lang  flex mx-4 ">
                                        <div className="imglang flex items-center ">
                                            <img src={flag} alt="" /> <div className=" ms-1">English</div> <FaAngleDown className="ms-1 shrink-0" />







                                        </div>
                                    </div>
                                    <div className="user flex mx-4 gap-3 items-center shrink-0">

                                        <img src={flag} alt="" className="w-11 h-11 rounded-[50%]" />
                                        <div className="">
                                            <div>heelo</div>
                                            <div>Admin</div>
                                        </div>
                                        <div>
                                            <img src={more} alt="" className="w-[22px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="mt-[67px]">

                            <Component {...props} />
                        </div>
                    </div>
                </div>


            </>
        );
    };
    return NewComponent;
};
