
import Navbar from './components/Navbar'
import './App.css'
import Movies from './components/Movies'
import WatchList from './components/WatchList'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'
import { useState } from 'react'



function App() {

  const [watchList , setWatchList]=useState([])

  const handleWatchList = (movieObj)=> {
    const newWatchList = [...watchList,movieObj]
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  const handleFilteredWatchList = (movieObj)=>
  {
    const filteredWatchList = watchList.filter((movie)=>
    {
      return movie.id!=movieObj.id
    })
    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
  }
  

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

<Route path='/watchlist' element={ <WatchList></WatchList> } ></Route>
  
    
    </Routes>
    

    </BrowserRouter>
   
       
    </>
  )
}

export default App
