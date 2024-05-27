import React from 'react'

const Footer = () => {
  return (
    <div className='text-center flex items-center gap-2 justify-center flex-col mt-16 text-sm text-white'>
      <div className='text-2xl'>{'{ }'}</div>
      <div>© {new Date().getFullYear()} - Adarsh Gajbhare</div>
    </div>
  )
}

export default Footer