import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link className='nav-link' to='/'>Homepage</Link>
        <Link className='nav-link' to='/pets'>All Pets</Link>
        <Link className='nav-link' to='/pets/create'>Create Pet</Link>
    </div>
  )
}

export default Navbar