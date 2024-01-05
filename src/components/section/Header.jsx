import React from 'react'
import { Link } from 'react-router-dom'

import logImg from '../../assets/img/img_logo.png'
import Sidebar from '../header/Sidebar';

const Header = () => {

  return (
    <header id='header' rold='header'>
        <div className='header__wrap'>
            <div className=''>
                <Link to='/' >  
                    <img src={logImg} alt='유퀴즈' className='logo__img' />
                </Link>  
            </div>
        </div>

        <Sidebar />
    </header>
  )
}

export default Header