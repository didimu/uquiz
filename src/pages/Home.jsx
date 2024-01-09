import React from 'react'
import { Link } from 'react-router-dom'
import { mainMenu } from '../data/main'
import Main from '../components/section/Main'



const Home = () => {
  return (
    <Main
      title='aaa'
      description='bbbb'
    >
      <div className='main__wrap padding__inner'>	
        <div className="quiz__name__list__wrap ">
          <ul className="quiz__name__list  ">

            {mainMenu.map((menu, key) =>(
              <li key={key}>
                <Link to={menu.src} className='link'>
                  <div className="bg__thmb" ><img src= {menu.bg} /></div>
                  <p className="title "><em>{menu.title}</em></p>
                  <div className="process__wrap">
                    <div className="state__bar on">   
                      <div className="process__bar"></div>
                      <div className="bar__ing"></div>		 
                    </div>
                  </div> 	 		
                </Link>
              </li> 

            ))}

          </ul>
        </div>
      </div>
    </Main>

  )
}

export default Home