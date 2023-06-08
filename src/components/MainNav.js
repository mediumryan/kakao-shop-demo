import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// 로고 이미지 불러오기
import mainLogo from './../images/main-logo.png';

const MainNav = () => {

  const navigate = useNavigate();  
  const [toggle, setToggle] = useState(false);
  
  return(
    <div id='navbar'>
      <div className='nav-title' onClick={()=>{navigate('/')}}>
        <img src={mainLogo}/>
      </div>
      <ul className={`nav-menu ${toggle == true && 'visible'}`}>
        <li onClick={()=>{navigate('/')}}>홈</li>
        <li onClick={()=>{navigate('/doll')}}>인형</li>
        <li onClick={()=>{navigate('/umbrella')}}>우산</li>
        <li onClick={()=>{navigate('/stationery')}}>문구류</li>
        <li onClick={()=>{navigate('/bedding')}}>침구류</li>
      </ul>
      <ul className={`nav-others ${toggle == true && 'visible'}`}>
        <li>🔔</li>
        <li onClick={()=>{navigate('/cart')}}>🛒</li>
        <li onClick={()=>{navigate('/signin')}}>👤</li>
      </ul>
      <button 
        className='nav-toggle-btn'
        onClick={()=>{
          setToggle(!toggle);
        }}
        >☰</button>
    </div>
  )
}

export default MainNav;