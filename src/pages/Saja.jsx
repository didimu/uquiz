import React from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Saja = () => {
  return (
    <Main
      title='Saja'
      description='Saja'
      >
      <div className='padding__inner'>

        <div className='menu_list_wrap'>
          <div className='menu_list_wrap_in'>
            <ul className='menu_list'>
              <li className='radius5'>
                <Link to='/SajaTypeA'>사자성어 풀기 <IoIosArrowForward size='30'color='#fff' cursor='pointer' className='btn__more' /></Link>		
              </li> 
            </ul>
          </div>
        </div>


      </div>
    </Main>
  )
}

export default Saja