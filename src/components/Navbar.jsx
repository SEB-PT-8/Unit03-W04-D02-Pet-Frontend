import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/pets'>All Pets</Link>
        <Link to='/pets/create'>Create Pet</Link>
    </div>
  )
}

export default Navbar