import React, { useEffect, useState } from 'react'


import Main from '../components/section/Main'    
import ImgRight from '../assets/img/danosaur/Psittacosaurus.jpg'
import ImgLeft from '../assets/img/danosaur/Tarbosaurus.jpg'

import IconTrue from '../assets/img/icon_true.png'
import IconFalse from '../assets/img/icon_fail.png'  // 실패 시 팝업 아이콘

const DinosaurTypeB = () => {

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
                <h2 className='h2_title'>공룡 이름을 보고 공룡을 맞춰보세요.</h2>

                <div className="flag__type__b">

                    <div className='q__title__box'>
                        <p className="q_title">타르보사우루스</p>
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
                        <p>1. 개요<br /> 

                            타르보사우르스는 후기 백악기 (7000만 년 전)에 살았으며 아시아의 몽골지역에서 발견된 육식공룡입니다.<br /> 

                            수각류인 타르보사우르스는 티라노사우루스와 비슷한 공룡으로써 ‘놀라게 하는 도마뱀’이라는 의미를 가지고 있습니다.<br /> 

                            수각류인 타르보사우르스는 날카롭고 강력한 이빨을 가지고 있으며 길고 잘 발달된 뒷다리와 강한 근육을 가지고 있는 턱으로 아시아 지역 최고의 포식자였습니다.<br /> <br /> 



                            2. 공룡정보<br /> 

                            ● 속 : 타르보사우루스(Tarbosaurus)<br /> 

                            ● 분류 : 수각류, 티라노사우루스과<br /> 

                            ● 길이 : 10~12m<br /> 

                            ● 무게 : 5~6톤<br /> 

                            ● 생존시기 : 후기 백악기 (7000만 년 전)<br /> 

                            ● 발견장소 : 몽골, 중국<br /> <br /> 



                            3. 공룡이야기<br /> 

                            ● 별명 : 놀라게 하는 도마뱀<br /> 

                            ● 특징<br /> 

                            - 수각류의 특징인 날카로운 이빨과 발톱, 잘 발달된 뒷다리, 강한 목 근육, 긴 꼬리를 가지고 있습니다. 앞발은 매우 작았지만 강한 근육을 가지고 있어 크기에 비해 강력한 힘을 가지고 있었습니다.<br /> 

                            - 백악기 후기에 몽골 지역에서 살았던 타르보사우르스는 백악기 후기 지층 전체에서 발견되고 있으며 작은 새끼 화석도 발견 되었습니다.<br /> 

                            - 커다란 몸집을 가지고 있으면서도 잘 발달된 뒷다리와 꼬리를 이용하여 빠르게 달릴 수 있는 점을 이용하여 사냥했습니다.<br /> 

                            - 타르보사우르스의 가장 큰 무기는 1.3m에 달하는 거대한 두개골, 8~16cm의 날카로운 이빨과 강력한 턱, 굵은 목은 어떠한 사냥감도 한번 물면 놓지 않았으며, 사냥한 초식공룡들의 살점을 쉽게 도려낼 수 있을 정도로 치명적인 무기를 지닌 셈입니다. 뼛속까지 부서질 정도의 강력한 힘을 이용하여 사냥했습니다.

                            - 악어의 귀 구조와 비슷하였기 때문에 청각도 발달했을 것으로 추측됩니다.<br /> <br /> 

                            감수 : 임종덕 박사
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

export default DinosaurTypeB