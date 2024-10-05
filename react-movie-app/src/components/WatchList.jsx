/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function WatchList({watchList}) {

 console.log(watchList)

 const [searchKey , setSearch]=useState('')

 const handleSearch = (e)=>
 {
    setSearch(e.target.value)
 }

  return (
    <>
    <div className='flex justify-center flex-wrap gap-2'>
    <div className='text-center text-white bg-black w-[6rem] rounded mt-2 p-2 font-bold hover:bg-gray-400 hover:text-black'>
      Action
    </div>
   
    </div>
  
    <div className='flex justify-center mt-5 mb-5'>
      <input type='text' onChange={handleSearch} value={searchKey} placeholder='🔍Search Movie' className='h-[2rem] w-[15rem] p-3 rounded bg-gray-200 text-black'></input>
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

      {watchList.filter((movieObj)=>
      {
        return movieObj.title.toLowerCase().includes(searchKey.toLocaleLowerCase())
      }).map((movieObj)=>
      {
     
       // eslint-disable-next-line react/jsx-key
       return  <tr>
        <td className='p-3 flex items-center gap-6' >
          <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="movie-poster" className='h-[8rem] w-[6rem]' />
          <div>{movieObj.original_title}</div>
        </td>
        <td>
          {movieObj.vote_average}
        </td>
        <td>
          {movieObj.popularity}
        </td>
        <td>
          Action
        </td>

        <td className>
        <FontAwesomeIcon icon={faTrash} />
        </td>
      </tr>
      })}

      

      </tbody>
      
      </table>

      

      </div>
      
      
      
      </>
    
  
  )
}

export default WatchList