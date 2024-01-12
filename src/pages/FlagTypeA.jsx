import React, { useState } from 'react'


import Main from '../components/section/Main' 
import { flagMenu } from '../data/flagTypeA'

const FlagTypeA = () => {

	const [correctClicked, setCorrectClicked] = useState(false);
	const [wrongClicked, setWrongClicked] = useState(false);

	const handleCorrectClick = () => {
	// Toggle the state when the button is clicked
		setCorrectClicked(!correctClicked);
	};
	const handleWrongClick = () => {
	// Toggle the state when the button is clicked
		setWrongClicked(!wrongClicked);
	};


	return (
	  <Main
		title='Flag'
		description='Flag'
		>
		<div className='padding__inner'>  
			<div className="ctn__w__70">
				

			
				{flagMenu.map((menu, key) =>(

					<div className="flag__type__a" key={key}>
						<div className="img__box">
							<img src={menu.img} alt={menu.name} />	
						</div> 
						<div className="btn__box">
							<button className='radius5 correct' onClick={handleCorrectClick}
      							style={{ backgroundColor: correctClicked ? 'green' : '#29c2ec' }}>{menu.title1}
							</button>
							<button  className='radius5 wrong' onClick={handleWrongClick}
      							style={{ backgroundColor: wrongClicked ? 'red' : '#29c2ec' }}>{menu.title2}
							</button>
						</div>
	
						<div className='dictionary__wrap'  dangerouslySetInnerHTML={{ __html: menu.dictionary}}>
							
						</div>
					</div>   					
 
				))}

				<div className="btn_fix_bottom">
					<button>계속하기</button>
				</div>


			</div>  
		</div>
	  </Main>
	)
  }
  

export default FlagTypeA