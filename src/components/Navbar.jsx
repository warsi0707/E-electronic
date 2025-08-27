import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import { memo } from 'react';

 function Navbar({value, handleChange}) {
  return (
     <div className="flex justify-between items-center p-2 gap-2 md:p-5 md:px-10 border-b border-gray-300 shadow-2xl">
        <div className="flex items-center gap-1">
            <Link to={"/"} className="md:text-xl font-semibold hidden sm:flex">Electronics</Link>
        </div>
        <div className="flex items-center border p-1 md:p-2  rounded-full">
            <p className="text-2xl "><CiSearch/></p>
            <input value={value} onChange={handleChange} type="text" className="md:pr-8 md:pl-2 outline-none" placeholder="Search here"/>
        </div>
    </div>
  )
}
export default memo(Navbar)
