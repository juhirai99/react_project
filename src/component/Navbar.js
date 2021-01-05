import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
function Navbar() {
    const [click , setClick] = useState(false);
    const handleClick= () => setClick(!click);
    const closeMobValue= () => setClick(false);
    const [button ,setButton] = useState(true);
    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize' , showButton);
    return (
        <>
         <nav className='navbar'>
          <div className ='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobValue}>
              Traveller Nest <i className="fa fa-plane" aria-hidden="true"></i>
          </Link>  
          <div className='menu-icon' onClick ={handleClick}>
           <i className={click ? 'fas fa-times':'fa fa-bars'} />
          </div>
          <ul className={click ?'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobValue}>
                      Home
                  </Link>
                  </li>
                  <li className='nav-item'>
                  <Link to='/product' className='nav-links' onClick={closeMobValue}>
                      Travel
                  </Link>
                  </li>
                  <li className='nav-item'>
                  <Link to='/services' className='nav-links' onClick={closeMobValue}>
                      Services
                  </Link>
                  </li>
                  <li className='nav-item'>
                  <Link to='/signup' className='nav-links-mobile' onClick={closeMobValue}>
                      Register
                  </Link>
              </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Register</Button>}
          </div>
         </nav>

        </>
    )
}

export default Navbar
