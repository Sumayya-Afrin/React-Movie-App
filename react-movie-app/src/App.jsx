
import Navbar from './components/Navbar'
import './App.css'
import Movies from './components/Movies'
import WatchList from './components/WatchList'

import {BrowserRouter,Routes,Route, json} from 'react-router-dom'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'



function App() {

  const [watchList , setWatchList]=useState([])

  const handleWatchList = (movieObj)=> {
    const newWatchList = [...watchList,movieObj]
    localStorage.setItem('movieApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  const handleFilteredWatchList = (movieObj)=>
  {
    const filteredWatchList = watchList.filter((movie)=>
    {
      return movie.id!=movieObj.id
    })
    localStorage.setItem('movieApp', JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList)
    
    console.log(filteredWatchList)
  }

  useEffect(()=>
  {
    let moviesFromLocalStorage = localStorage.getItem('movieApp')
    if(!moviesFromLocalStorage)
    {
      return
    }

    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  

  return (
    <>

    <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
<Route path='/' element={  
  <>
  <Banner></Banner>
<Movies handleWatchList={handleWatchList} handleFilteredWatchList={handleFilteredWatchList} watchList={watchList}></Movies>
  </>
  
 } ></Route>

<Route path='/watchlist' element={ <WatchList watchList={watchList} setWatchList={setWatchList} handleFilteredWatchList={handleFilteredWatchList}></WatchList> } ></Route>
  
    
    </Routes>
    

    </BrowserRouter>
   
       
    </>
  )
}

export default App
