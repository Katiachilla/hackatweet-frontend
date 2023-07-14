import styles from '../styles/Login.module.css';


function Login() {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
const handleSignupClick = () => {
  setIsPopoverOpen(!isPopoverOpen);
};

const handleSigninClick = () => {
  setIsPopoverOpen(!isPopoverOpen);
};


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
              <button className={styles.buttonUp}onClick={handleSignupClick}>Signup</button>
              <p className={styles.p}>Already have an account?</p>
              <button className={styles.buttonIn}onClick={handleSigninClick}>Signin</button>
              {isPopoverOpen && (
                <div className={styles.popover}>
                  <Popover/> </div>)}
            </div>
        </div> 
    
    </div>
  );
}

export default Login;
