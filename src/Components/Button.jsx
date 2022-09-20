import React from 'react'

function Button({ children }) {
  return (
    <button className='bg-indigo-700 w-fit px-4 py-2 text-xl rounded-lg hover:bg-indigo-900 transition-all'>{children}</button>
  )
}

export default Button;
