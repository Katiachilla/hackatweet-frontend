import React from 'react';
import { useRouter } from 'next/router'
import { Signin } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/sign.module.css';


const PopoverSignin = () => {
  return (
    <div className={styles.popover}>
      <span><FontAwesomeIcon icon={faXmark}   className={styles.crossIcon}/></span>
        <img src="logotweeter.png" alt="logo" className={styles.logo}/>
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
       
      </div>
  );
};

export default PopoverSignin;

// function Signin (){
//   const dispatch = useDispatch();

//   const [signInPassword, setSignInPassword] = useState('');
//   const [signInUsername, setSignInUSername] = useState('');
//   const router = useRouter();

 
//     const handleLogin = () => {
// 		fetch('http://localhost:3000/users/signin', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify({username: signInUsername,password: signInPassword }),
// 		}).then(response => response.json())
// 			.then(data => {
// 				if (data.result) {
// 					dispatch(login({username: signInUsername,name: data.name, token:data.token})); // Ajoutez ici la logique d'inscription avec l'email et le mot de passe
// 					setSignInemail('');
// 					setSignInPassword('');}
//           router.push('/home')    // redirige vers la page Home
// 				})
// 			};
	 

//   return (
//     <div className={styles.loginContainer}>
//       <div className={styles.formContainer}>
//         <img src="logotweeter.png" alt="logo" className={styles.logoRight}/>
//         <h2>Connect to Hackatweet</h2>
//         <input type="text" placeholder="Username" onChange={(e) => setSignInUSername(e.target.value)} value={signInUsername}/>
//         <input type="password" placeholder="Password"onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
//         <button onClick={handleLogin}>Sign up</button>
//       </div>
//     </div>
//   );
// };

// export default Signin;