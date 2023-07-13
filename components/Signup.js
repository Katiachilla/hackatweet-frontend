import React from 'react';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router'
import { Signup } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



function Signup (){
  const dispatch = useDispatch();
  const [signUpName, setSignUpName] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const router = useRouter();


 
    const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: signUpName, password: signUpPassword, username:signUpUsername }),
		}).then(response => response.json())
			.then(data => {
        
				if (data.result) { 
					dispatch(login({username: signUpUsername,token:data.token})); // Ajoutez ici la logique de connexion avec l'email et le mot de passe
					setSignUpName('');
                    setSignUpUsername('');
					setSignUpPassword('');  
        }
           router.push('/home')   // redirige vers la page Home  //si data result est a true (fetch)
				})
			};
    
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <img src="logob.png" alt="logo" class="logo"/>
        <h2>Create your Hackatweet account</h2>
        <input type="text" placeholder="Firstname" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} />
        <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}/>
        <input type="password" placeholder="Password"onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
        <button onClick={handleRegister}>Sign up</button>
      </div>
    </div>
  );
};

export default Signup;
