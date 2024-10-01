// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies() {

  const [movies ,setMovies]=useState([])
  const [pageNo ,setpageNo]=useState(1)


  const handlePrev =()=>
  {
    if(pageNo===1)
    {
      setpageNo(pageNo)
    }
    else{
      setpageNo(pageNo-1)
    }
  }

   const handleNext = ()=>
  {
    setpageNo(pageNo+1)
  }

//axios is used to make http request with external API'S
  useEffect(()=>
    {
     
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d30d948d3e881a87f72e4ee63ae2d5a5&language=en-US&page=${pageNo}`).then((res)=>
      {
        setMovies(res.data.results)
      })
     
    },[pageNo])
  
  
  return (
    <div className='p-5'>
      <div className='text-center text-2xl font-bold mb-5'>Trending Movies</div>
      <div className='flex flex-row  flex-wrap justify-around gap-8'>

        {movies.map((movieObj)=>
        {
          
          // eslint-disable-next-line react/jsx-key
          return <MovieCard poster_path={movieObj.poster_path} original_title={movieObj.original_title}/>
        })
        }
      
    
      </div>

<Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo}></Pagination>
      
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=d30d948d3e881a87f72e4ee63ae2d5a5&language=en-US&page=1

