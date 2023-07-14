import React from 'react';
import styles from '../styles/sign.module.css';
import { useRouter } from 'next/router'
import { Signup } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



const PopoverSignup = () => {
  return (
    <div className={styles.popover}>
      <span><FontAwesomeIcon icon={faXmark}   className={styles.crossIcon}/></span>
        <img src="logotweeter.png" alt="logo" className={styles.logo}/>
        <h2 className={styles.h2}>Create your Hackatweet account</h2>
        <input type="text" placeholder="Name" className={styles.inputStyle} />
        <input type="text" placeholder="Username"  className={styles.inputStyle}/>
        <input type="password" placeholder="Password" className={styles.inputStyle}/>
        <button className={styles.buttonUp}>Sign up</button>
       
      </div>
  );
};

export default PopoverSignup;

// function Signup (){
//   const dispatch = useDispatch();
//   const [signUpName, setSignUpName] = useState('');
//   const [signUpUsername, setSignUpUsername] = useState('');
//   const [signUpPassword, setSignUpPassword] = useState('');
//   const router = useRouter();

//  // création d'un nouvel utilisateur
//     const handleRegister = () => {
//       fetch('http://localhost:3000/users/signup', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify({ name: signUpName, password: signUpPassword, username:signUpUsername }),
// 		}).then(response => response.json())
// 			.then(data => {
        
// 				if (data.result) { 
// 					dispatch(login({username: signUpUsername,token:data.token})); // Ajoutez ici la logique de connexion avec l'email et le mot de passe
// 					setSignUpName('');
//           setSignUpUsername('');
// 					setSignUpPassword('');  
//         }
//            router.push('/home')   // redirige vers la page Home  //si data result est a true (fetch)
// 				})
//       };
    
//   return (
//     <div className={styles.popup}>
//     <div className={styles.popup-content}>
//        <img src="logotweeter.png" alt="logo" className={styles.logoRight}/>
//         <h2>Create your Hackatweet account</h2>
//         <form onSubmit={handleSubmit}>
//        <input type="text" placeholder="Firstname" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} required />
//     <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} required  />
//     <input type="password" placeholder="Password"onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} required/>
//     <button onClick={handleRegister}>Sign up</button>
//     </form>
//      </div>
//     </div>
//   );
// };