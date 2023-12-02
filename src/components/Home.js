import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <div> 
            <Link to={'/transaction'}>TRANSACTION </Link>
        </div>
      </div>
      <div>
        <div> 
            <Link to={'/data'}>DATA </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

