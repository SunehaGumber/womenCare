import React from 'react'

const CardArticle = ({src,btnText,title,desc}) => {
  return (
       <div className="bg-pink-100 shadow-md rounded-2xl p-4 w-[300px] h-[300px] flex flex-col justify-between">
              <div className=' flex justify-center items-center'><img className='rounded h-25 w-full' src={src} /></div>
          <h2 className="text-lg font-semibold text-pink-900">
           {title}
          </h2>
          <p className="text-sm text-gray-700">
            {desc}
          </p>
          <button className="mt-2 bg-pink-600 text-white px-4 py-1 rounded-xl">
            {btnText}
          </button>
        </div>
  )
}

export default CardArticle
