/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import genreIds from '../utilities/genre';


function WatchList({watchList , setWatchList , handleFilteredWatchList}) {

 console.log(watchList)

 const [searchKey , setSearch]=useState('')
 const [genreList , setGenreList]=useState(['All Genres'])
 const [currentGenre , setCurentGenre ] = useState('All Genres')


 const handleCurrentGenre = (genre)=>
 {
   setCurentGenre(genre)
 }

 const handleSearch = (e)=>
 {
    setSearch(e.target.value)
 }

 const sortIncreasing = () =>
 {
    let sortedWatchListAsc = watchList.sort((movieA , movieB) =>
    {
      return movieA.vote_average-movieB.vote_average
    })

    setWatchList([...sortedWatchListAsc])   
 }

 const sortDecreasing = () =>
  {

    let sortedWatchListDsc = watchList.sort((movieA , movieB) =>
      {
        return movieB.vote_average-movieA.vote_average
      })
  
      setWatchList([...sortedWatchListDsc])
 
  }

  const sortPopularityAsc = () =>
    {
  
      let sortedPopularityListAsc = watchList.sort((movieA , movieB) =>
        {
          return movieA.popularity-movieB.popularity
        })
    
        setWatchList([...sortedPopularityListAsc])
   
    }


  const sortPopularityDsc = () =>
    {
  
      let sortedPopularityListDsc = watchList.sort((movieA , movieB) =>
        {
          return movieB.popularity-movieA.popularity
        })
    
        setWatchList([...sortedPopularityListDsc])
   
    }

   useEffect(()=>
  {
    let tempList = watchList.map((movieObj)=>
    {
      return genreIds[movieObj.genre_ids[0]]
    })
    tempList = new Set(tempList)
    setGenreList(['All Genres',...tempList])
    console.log(tempList)
 
  },[watchList])
 



  return (
    <>
    <div className='flex justify-center flex-wrap gap-2'>

      {genreList.map((genre)=>
      {
        // eslint-disable-next-line react/jsx-key
        return <div onClick={()=>handleCurrentGenre(genre)}  className={ currentGenre===genre ? 'text-center text-white font-xs bg-black w-[6rem] truncate hover:cursor-pointer rounded mt-2 h-[2rem] font-bold hover:bg-gray-400 hover:text-black' :  'text-center hover:cursor-pointer text-black font-xs bg-gray-400 w-[6rem] truncate rounded mt-2 h-[2rem] font-bold' }>
        {genre}
      </div>
      })}
  
   
    </div>
  
    <div className='flex justify-center mt-5 mb-5'>
      <input type='text' onChange={handleSearch} value={searchKey} placeholder='🔍Search Movie' className='h-[2rem] w-[15rem] p-3 rounded bg-gray-200 text-black'></input>
    </div>
    
    
    <div  className='overflow-hidden  rounded-lg  border border-gray-200 p-3'>
      <table className='w-full text-center'>
      <thead className='border-b-2'>
        <tr>
          <th>
           Name
          </th>
          <th>

         <div className='flex justify-center gap-2'>
          <div onClick={sortIncreasing}><FontAwesomeIcon icon={faArrowUp} className='hover:cursor-pointer' /></div>
          <div>Ratings</div>
          <div onClick={sortDecreasing}><FontAwesomeIcon icon={faArrowDown} className='hover:cursor-pointer'/></div>
          </div>
       
          </th>

          <th >

            <div className='flex justify-center gap-2'>

            <div onClick={sortPopularityAsc}><FontAwesomeIcon icon={faArrowUp} className='hover:cursor-pointer' /></div>
          <div>
          Popularity</div>
          <div onClick={sortPopularityDsc}><FontAwesomeIcon icon={faArrowDown} className='hover:cursor-pointer'/></div>
            </div>

          

</th>
<th>
  Genre
</th>

      </tr>

      </thead>
      <tbody> 

      {watchList.filter((movieObj)=>
      {
        if(currentGenre=='All Genres')
        {
          return true;
        }
        else{
          return genreIds[movieObj.genre_ids[0]]===currentGenre;
        }
        
      }).filter((movieObj)=>
      {
        return movieObj.title.toLowerCase().includes(searchKey.toLocaleLowerCase())
      }).map((movieObj)=>
      {
     
       // eslint-disable-next-line react/jsx-key
       return  <tr className='border border-gray-200'>
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
          {genreIds[movieObj.genre_ids[0]]}
        </td>

        <td onClick={()=>handleFilteredWatchList(movieObj)} className='hover:cursor-pointer'>
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