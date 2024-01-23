import React, { useState } from 'react'

import logImg from '../../assets/img/img_logo.png'
import { IoMdClose } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi'
import { IoPerson } from 'react-icons/io5';
import RadioGroup from '../common/RadioGroup';
import Radio from '../common/Radio';

 

const Sidebar = () => {
    const [menu, setMenu] = useState('');
    function menuOpen(){
        setMenu('active');
    }
    function menuClose(){
        setMenu('');
    }

  return (
    <>
        <div className='header__menu' role='button'> 
            <BiMenu size='50' cursor='pointer' onClick={menuOpen} />  
        </div>
        <div className='sidebar'>

            <div id='lnbMobile' className={menu}>
                <div className='top__wrap'>
                    <img src={logImg} alt='유퀴즈' className='logo__img' />
                    <IoMdClose size='50' cursor='pointer' onClick={menuClose} className='menu__close' />
                </div> 
                <div className='user_info_wrap'>
                    <div className='name__box'>
                        <div className='name__photo'>
                            <IoPerson size='30'color='#7a7a7a' cursor='pointer' onClick={menuClose} className='' />
                        </div>
                        <div className='name__photo__info'>
                            <p className='name'><span>#1697679228</span> 님</p>                            				
                        </div>
                    </div>

                    <div className='info__box'>
                        <dl>
							<dt>닉&nbsp;&nbsp;네&nbsp;&nbsp;임 : </dt>
							<dd><input type='text' name='' defaultValue='' className='input_txt w_100'  /></dd>
						</dl>
						<dl>
							<dt>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;별 : </dt>
							<dd>   
                                <RadioGroup>
                                    <Radio children="남자" name="gender" defaultChecked={true} value="M" />
                                    <Radio children="여자" name="gender"  value="F" />
                                </RadioGroup>
							</dd>
						</dl> 
						<dl>
							<dt>생년월일 : </dt>
							<dd>
                                <input type='text' name='' id='' defaultValue='' className='input_txt w_100' />
                            </dd>
						</dl>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Sidebar