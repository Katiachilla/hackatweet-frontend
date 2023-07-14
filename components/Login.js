import styles from '../styles/Login.module.css';

function Login() {
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
              <button className={styles.buttonIn}>Signin</button>
            </div>
        </div> 
    
    </div>
  );
}

export default Login;
