
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function MovieCard({poster_path , original_title}) {
  return (
   
   <div  className='flex flex-col-reverse h-[40vh] w-[180px] bg-center bg-cover  hover:cursor-pointer hover:scale-110 duration-300 ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      
        <div className='bg-black text-center text-xl w-full text-white opacity-70 '>{original_title}</div>
      
   
   </div>
 

  )
}

export default MovieCard