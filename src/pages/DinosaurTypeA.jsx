import React, { useEffect, useState } from 'react'


import Main from '../components/section/Main' 
import { danosaurMenu } from '../data/dinosaurTypeA'

import IconTrue from '../assets/img/icon_true.png'
import IconFalse from '../assets/img/icon_fail.png'  // 실패 시 팝업 아이콘

const DinosaurTypeA = () => {

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
		answerClass = 'answer__true';
		answerBtnClassTrue = `${radius5Class} ${answerClass}`;
		answerBtnClassFalse = `${radius5Class}`;

		icon_true = 'icon__true';
		dic_view='dic__view';
		btnFixBottom='btnFixBottom_view'
	} else if (answerClick==='false') {
		answerClass = 'answer__false';
		answerBtnClassTrue = `${radius5Class}`;
		answerBtnClassFalse = `${radius5Class} ${answerClass}`;

		icon_false = 'icon__false';
		dic_view='dic__view';
		btnFixBottom='btnFixBottom_view'
	}

	

	return (
	  <Main
		title='Flag'
		description='Flag'
		>
		<div className='padding__inner'>  
			<div className="ctn__w__70">
				
				<h2 className='h2_title'>사진을 보고 공룡 이름을 맞춰보세요.</h2>
			
				{danosaurMenu.map((menu, key) =>(

					<div className="flag__type__a" key={key}>
						<div className="img__box">
							<img src={menu.img} alt={menu.name} />	
							<div className="answerCheck">
								<img src={IconTrue} id='' alt='' className={icon_true} style={{display:'none'}} /> 
								<img src={IconFalse} id='' alt='' className={icon_false} style={{display:'none'}} /> 
							</div>
						</div> 
						<div className="btn__box">
							<button className={answerBtnClassTrue} onClick={handleCorrectClick}>
								{menu.title1}
							</button>
							<button  className={answerBtnClassFalse} onClick={handleWrongClick}>
								{menu.title2}
							</button>
						</div>
	
						<div className={dic_view} style={{display:'none'}}>
							<div className='dictionary__wrap'  dangerouslySetInnerHTML={{ __html: menu.dictionary}}>
								
							</div>
						</div>
					</div>   					
 
				))}

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
  

export default DinosaurTypeA