import styles from '../styles/Login.module.css';

function Login() {
  return (
<div>
        <div class ="loginleft">
            <div class="background-image">
             <img src="backg.png" alt="back"/>
            </div>    
            <img src="logob.png" alt="logo" class="logoreturn"/>
       </div>  

        <div class ="logincenter"> 
            <img src="logob.png" alt="logo" class="logo"/>
            <h1 class="h1">See what's happening</h1>
            <h2 class="h2">Join Hackatweet today.</h2>
            <button class="buttonUp">Signup</button>
            <p class="p">Already have an account?</p>
            <button class="buttonIn">Signup</button>
        </div> 
    
    </div>
  );
}

export default Login;
