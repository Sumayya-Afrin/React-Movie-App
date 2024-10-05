
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
function MovieCard({poster_path ,handleWatchList , watchList, handleFilteredWatchList ,movieObj ,original_title}) {
  const isContain = (movieObj) =>
  {

    // eslint-disable-next-line react/prop-types
    for(let i=0;i<watchList.length;i++)
    {
      // eslint-disable-next-line react/prop-types
      if(watchList[i].id==movieObj.id)
      {
        return true
      }
    }

    return false
     
  }
  return (
   
   <div  className='flex flex-col h-[40vh] w-[180px] bg-center bg-cover  hover:cursor-pointer hover:scale-110 duration-300 justify-between items-end ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
  
  {isContain(movieObj) ? <div className='bg-black text-white mt-2 mr-2 opacity-100 w-[1.5rem] rounded pl-1' onClick={()=>{handleFilteredWatchList(movieObj)}}><FontAwesomeIcon icon={faCheck} /></div> : <div className='bg-black text-white mt-2 mr-2 opacity-100 w-[1.5rem] rounded pl-1' onClick={()=>{handleWatchList(movieObj)}}><FontAwesomeIcon icon={faList} /></div>}
      
        <div className='bg-black text-center text-base w-full text-white opacity-70 '>{original_title}</div>
      
   
   </div>
 

  )
}

export default MovieCard