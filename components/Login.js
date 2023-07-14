import styles from '../styles/Login.module.css';
import React, { useState } from 'react';
import PopoverSignin from './Signin';
// import { PopoverSignin} from 'antd'


function Login() {

  const [isPopoverInOpen, setIsPopoverInOpen] = useState(false);

  const handleSigninClick = () => {
    setIsPopoverInOpen(!isPopoverInOpen);
  };

  
// const handleSignupClick = () => {
//   setIsPopoverOpen(!isPopoverOpen);
// };



// const handleClosePopup = () => {
//   setPopupOpen(false);
// };



  return (
<div className={styles.container}>

        <div className={styles.containerLeft}>
          <img src="logotweeter.png" alt="logo" className={styles.logoLeft}/> 
          <img src="imageLeft.png" alt="image" className={styles.imageLeft}/>
        </div> 

        <div className={styles.containerRight}> 
            <div>
             <img src="logotweeter.png" alt="logo" className={styles.logoRight}/>
            </div>
            <div>
              <h1 className={styles.h1}>See what's happening</h1>
              <h2 className={styles.h2}>Join Hackatweet today.</h2>
              <button className={styles.buttonUp}>Signup</button>
              <p className={styles.p}>Already have an account?</p>
              <button className={styles.buttonIn}onClick={handleSigninClick}>Signin</button>
              {isPopoverInOpen && (
        <PopoverSignin  className={styles.Popover}/>
      )}
            </div>
        </div> 
    
    </div>
  );
}

export default Login;
