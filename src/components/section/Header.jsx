import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header' rold='header'>
        <div className='header_wrap'>
            <h1>
                <Link to='/' >  
                    <img src='../img/img_logo.png' alt='유퀴즈' />
                </Link>  
            </h1>
        </div>
    </header>
  )
}

export default Header