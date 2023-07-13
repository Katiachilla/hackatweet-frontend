import React from 'react';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router'
import { Signin } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



function Signin (){
  const dispatch = useDispatch();

  const [signInPassword, setSignInPassword] = useState('');
  const [signInUsername, setSignInUSername] = useState('');
  const router = useRouter();

 
    const handleLogin = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({username: signInUsername,password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({username: signInUsername,name: data.name, token:data.token})); // Ajoutez ici la logique d'inscription avec l'email et le mot de passe
					setSignInemail('');
					setSignInPassword('');}
          router.push('/home')    // redirige vers la page Home
				})
			};
	 

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <img src="logob.png" alt="logo" class="logo"/>
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" onChange={(e) => setSignInUSername(e.target.value)} value={signInUsername}/>
        <input type="password" placeholder="Password"onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button onClick={handleLogin}>Sign up</button>
      </div>
    </div>
  );
};

export default Signin;