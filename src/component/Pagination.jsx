import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Pagination({prevPage,nextPage,pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-4 flex justify-center items-center'>
      <div className='px-8' onClick={prevPage}>
        <FaArrowLeft/>
      </div>
      <div className='font-bold'>
      {pageNo}
      </div>
      <div className='px-8' onClick={nextPage}>
        <FaArrowRight/>
      </div>
    </div>
  )
}

export default Pagination