import React from 'react'

const Button = ({data}) => {
  return (
      <button type='submit' className='bg-pink-950 rounded cursor-pointer px-3 py-3 mt-3'>{data}</button>
  )
}

export default Button