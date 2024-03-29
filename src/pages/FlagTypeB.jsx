import React, { useEffect, useState } from 'react'


import Main from '../components/section/Main'    
import ImgLeft from '../assets/img/flag/ls.png'
import ImgRight from '../assets/img/flag/tz.png'

import IconTrue from '../assets/img/icon_true.png'
import IconFalse from '../assets/img/icon_fail.png'  // 실패 시 팝업 아이콘

const FlagTypeB = () => {

	const [answerClick, setAnswerClick] = useState('');
	let icon_true='';
	let icon_false='';
	let dic_view='';
	let btnFixBottom='';

	const handleCorrectClick = () => {
		setAnswerClick('true');
	};
	const handleWrongClick = () => {

		setAnswerClick('false');
	};

	const radius5Class = 'radius5';
	let answerClass='';
	let answerBtnClassTrue=`${radius5Class}`;
	let answerBtnClassFalse=`${radius5Class}`;
	if (answerClick==='true') {
		answerClass = 'answer__true__line__green';
		answerBtnClassTrue = `${radius5Class} ${answerClass}`;
		answerBtnClassFalse = `${radius5Class}`;

		icon_true = 'icon__true';
		dic_view='dic__view';
		btnFixBottom='btnFixBottom_view'
	} else if (answerClick==='false') {
		answerClass = 'answer__false__line__red';
		answerBtnClassTrue = `${radius5Class}`;
		answerBtnClassFalse = `${radius5Class} ${answerClass}`;

		icon_false = 'icon__false';
		dic_view='dic__view';
		btnFixBottom='btnFixBottom_view'
	}




  return (

    <Main	title='Flag' description='Flag'>
        <div className='padding__inner'>  
            <div className="ctn__w__70">				 
                <h2 className='h2_title'>나라 이름을 보고 국기를 맞춰보세요.</h2>

                <div className="flag__type__b">

                    <div className='q__title__box'>
                        <p className="q_title">탄자니아</p>
                    </div>

                    <div className='flag__type__b__wrap'>
                        
                        <div className="answerCheck">
                            <img src={IconTrue} id='' alt='' className={icon_true} style={{display:'none'}} /> 
                            <img src={IconFalse} id='' alt='' className={icon_false} style={{display:'none'}} /> 
                        </div>
                        <ul className="flag__type__b__img">       
                            <li className="radius5">
                                <div className="box">
                                    <div className={answerBtnClassTrue} onClick={handleCorrectClick}>
                                        <img src={ImgLeft} />
                                    </div>
                                </div>		
                            </li>
                            <li className="radius5">
                                <div className="box">
                                    <div  className={answerBtnClassFalse} onClick={handleWrongClick}>
                                        <img src={ImgRight} />						 
                                    </div>
                                </div>		
                            </li>
                        </ul>
                    </div> 
                </div>   	

            
                <div className={dic_view} style={{display:'none'}}>
                    <div className='dictionary__wrap'>
                        <p>탄자니아의 국기는 1964년 6월 30일에 탕가니카와 잔지바르 두 나라의 국기를 조합하여 제정되었다.<br /> 
                            녹색은 국토를, 검정은 국민을, 금색은 나라의 광물 자원을, 파랑은 수많은 강과 호수, 인도양을 의미한다.<br />

                            탄자니아 연합공화국(스와힐리어: Jamhuri ya Muungano wa Tanzania 잠후리 야 뭉가노 와 탄자니아,
                            아랍어: جمهورية تنزانيا الاتحادية, 영어: United Republic of Tanzania 유나이티드 리퍼블릭 오브 탠저니아[*])은 동아프리카에 있는 나라이며, 
                            1961년에 독립한 탕가니카와 1963년에 독립한 잔지바르가 1964년에 통합하여 생긴 나라이다.<br />
                            또한 탄자니아의 법적인 수도는 도도마이지만, 실질적인 수도의 기능은 탄자니아의 최대 도시인 다르에스살람이 하고 있으며, 
                            각국의 대사관을 포함한 많은 공공기관들과 기업들이 현재까지도 이전을 거부하고 있는 상태이다.
                        </p>
                    </div>
                </div>
            
                <div className={btnFixBottom} style={{display:'none'}}>
                    <div className="btn_fix_bottom">
                        <button>계속하기</button>
                    </div>
                </div> 

            </div>  
        </div>
    </Main>




  )
}

export default FlagTypeB