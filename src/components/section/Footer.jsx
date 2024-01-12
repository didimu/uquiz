import React from 'react'

import logImg from '../../assets/img/img_logo.png'

const Footer = () => {
  return (
    <footer id='footer' rold='contentinfo'>
        <div className='ftcopy'>
          <div className='ftcopy_wrap clearFix'>
            <div className='ftlogo'><img src={logImg} alt='유퀴즈' className='logo__img' /></div>
            <div className='copyright'>
              <p>주소  |  서울시 금천구 가산디저털1로 5 대륭태크노타운 20차 1204호</p>
              <p>대표전화번호 | 02-2224-0786</p>
              <p>이메일 | didimu@didimu.co.kr</p>
              <p className='copy'>COPYRIGHT  (주) 디딤유. ALL RIGHTS RESERVED.</p>
            </div>	

          </div>
			  </div>
    </footer>
  )
}

export default Footer