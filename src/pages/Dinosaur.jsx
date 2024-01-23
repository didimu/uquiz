import React from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Dinosaur = () => {
  
  return (
    <Main
      title='Dinosaur'
      description='Dinosaur'
      >
      <div className='padding__inner'>

		<div className='menu_list_wrap'>
			<div className='menu_list_wrap_in'>
				<ul className='menu_list'>
					<li className='radius5'>
						<Link to='/DinosaurTypeA'>공룡이름 맞추기 <IoIosArrowForward size='30'color='#fff' cursor='pointer' className='btn__more' /></Link>		
					</li>
					<li className='radius5'>
						<Link to='/DinosaurTypeB'>공룡그림 맞추기 <IoIosArrowForward size='30'color='#fff' cursor='pointer' className='btn__more' /></Link>
					</li>
					<li className='radius5'>
						<Link to=''>공룡 스피드 퀴즈 <IoIosArrowForward size='30'color='#fff' cursor='pointer' className='btn__more' /> </Link>
					</li>
				</ul>
			</div>
		</div>


      </div>
    </Main>
  )
}

export default Dinosaur