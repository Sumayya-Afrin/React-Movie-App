// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function WatchList() {
 

  return (
    <>
    <div className='flex justify-center flex-wrap gap-2'>
    <div className='text-center text-white bg-black w-[6rem] rounded mt-2 p-2 font-bold hover:bg-gray-400 hover:text-black'>
      Action
    </div>
   
    </div>
  
    <div className='flex justify-center mt-5 mb-5'>
      <input type='text' placeholder='🔍Search Movie' className='h-[2rem] w-[15rem] p-3 rounded bg-gray-200 text-black'></input>
    </div>
    
    
    <div  className='overflow-hidden  rounded-lg  border border-gray-200 '>
      <table className='w-full text-center'>
      <thead className='border-b-2'>
        <tr>
          <th>
           Name
          </th>
          <th>
          Ratings
          </th>
          <th>
  Popularity
</th>
<th>
  Genre
</th>

      </tr>

      </thead>
      <tbody> 
        <tr>
          <td className='p-3 flex items-center gap-6' >
            <img src="https://rukminim2.flixcart.com/image/750/900/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false" alt="" className='h-[8rem] w-[6rem]' />
            <div>Blade Runner</div>
          </td>
          <td>
            9.7
          </td>
          <td>
            9
          </td>
          <td>
            Action
          </td>

          <td className>
          <FontAwesomeIcon icon={faTrash} />
          </td>
        </tr>

      </tbody>
      
      </table>

      

      </div>
      
      
      
      </>
    
  
  )
}

export default WatchList