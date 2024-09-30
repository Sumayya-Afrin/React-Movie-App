// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react'
// import MovieCard from './MovieCard'
// import axios from 'axios'



// useEffect(()=>
// {
 
//   axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d30d948d3e881a87f72e4ee63ae2d5a5&language=en-US&page=1').then((res)=>
//   {
//     setMovies(res.data.results)
//   })
 
// },[])

// function Movies() {
//   const [movies ,setMovies]=useState([])
  
//   return (
//     <div className='p-5'>
//       <div className='text-center font-2xl font-bold'>Trending Movies</div>
//       <div className='flex flex-row  flex-wrap justify-around'>

//         {movies.map((obj)=>
//         {
//           // eslint-disable-next-line react/jsx-key
//           return <MovieCard/>
//         })}
      
    
//       </div>
      
//     </div>
//   )
// }

// export default Movies

// // https://api.themoviedb.org/3/movie/popular?api_key=d30d948d3e881a87f72e4ee63ae2d5a5&language=en-US&page=1

// eslint-disable-next-line no-unused-vars
import React from 'react'

function Movies() {
  return (
    <div>
hello
    </div>
  )
}

export default Movies