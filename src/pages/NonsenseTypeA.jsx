import React, { useEffect, useState } from 'react'

import Main from '../components/section/Main'
import { nonMenu } from '../data/nonsenseTypeA'



const NonsenseTypeA = () => {

	const [isVisible, setIsVisible] = useState(false);
	const handleButtonClick = () => {
    // Toggle the visibility state
    setIsVisible(!isVisible);
  };

  const answerViewClass = isVisible?'view':'not__view';


  return (

    <Main	title='nonsense' description='nonsense'>
        <div className='padding__inner'>  
            <div className="ctn__w__70">				 
                <h2 className='h2_title'>넌센스 퀴즈를 맞춰보세요.</h2>      
                
                  
                <div className='q__title__box'>
                  {nonMenu.map((menu, key) =>(
                    <p className="q_title" key={key}>{menu.title}</p>
                  ))}
                </div>

                  
                <div className='btn__click__wrap'>
                  <button onClick={handleButtonClick}>정답보기!</button>
                </div>

                <div className={answerViewClass}>        
                  <div className="answer__box">
                    {nonMenu.map((menu, key) =>(
                      <p key={key}>{menu.answer}</p>
                    ))}
                  </div> 
                </div> 

                <div className={answerViewClass}>
                  <div className="btn_fix_bottom">
                    <button>계속하기</button>
                  </div>
                </div> 
                             

            </div>  
        </div>
    </Main>


  )
}

export default NonsenseTypeA