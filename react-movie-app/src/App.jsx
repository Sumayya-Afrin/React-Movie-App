
import Navbar from './components/Navbar'
import './App.css'
import Movies from './components/Movies'
import WatchList from './components/WatchList'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'



function App() {
  

  return (
    <>

    <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
<Route path='/' element={  
  <>
  <Banner></Banner>
<Movies></Movies>
  </>
  
 } ></Route>

<Route path='/watchlist' element={ <WatchList></WatchList> } ></Route>
  
    
    </Routes>
    

    </BrowserRouter>
   
       
    </>
  )
}

export default App
