// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='flex border space-x-5 text-base p-2	 font-bold'>
        
        <FontAwesomeIcon icon={faClapperboard} className='mt-1' />
        <Link to="/">Home</Link>
        <Link  to="/watchlist">Watch List</Link>
        </div>
  )
}

export default Navbar