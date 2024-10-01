// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


// eslint-disable-next-line react/prop-types
function Pagination({handleNext , handlePrev ,  pageNo}) {
  return (
    <div className='flex gap-5 justify-center text-white bg-gray-900 p-2 mt-5'>
        
       <div onClick={handlePrev} className='hover:cursor-pointer'><FontAwesomeIcon icon={faArrowLeft} /></div>
       <div>{pageNo}</div>
       <div onClick={handleNext} className='hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRight} /></div>
       
       </div>
  )
}

export default Pagination