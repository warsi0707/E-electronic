import React, { memo } from 'react'
import { Link } from 'react-router'

function Cards({title,brand,image,id}) {
  return (
     <div className="pb-5 h-auto w-80 p-2 bg-gray-100 rounded-4xl shadow-2xl ">
      <img className="w-full h-72 rounded-4xl" src={image} />
      <div className=" space-y-2 p-3">
        <div className="flex justify-between">
          <div>
            <h1 className=" font-semibold">{title}</h1>
            <p>{brand}</p>
          </div>
          <h1 className="text-gray-400">2024</h1>
        </div>
        <div className="flex gap-2 justify-between">
          <Link
            to={`/product/${id}`}
            className="bg-black py-2 flex justify-center items-center text-white w-full rounded-full cursor-pointer hover:bg-slate-800 transition-all duration-300"
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  )
}
export default memo(Cards)