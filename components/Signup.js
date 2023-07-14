import React from 'react';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router'
import { Signup } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Popover, Button } from 'antd';

function Signup (){
  const dispatch = useDispatch();
  const [signUpName, setSignUpName] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const router = useRouter();






 // création d'un nouvel utilisateur
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
    <div className={styles.popup}>
    <div className={styles.popup-content}>
       <img src="logotweeter.png" alt="logo" className={styles.logoRight}/>
        <h2>Create your Hackatweet account</h2>
        <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Firstname" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} required />
    <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} required  />
    <input type="password" placeholder="Password"onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} required/>
    <button onClick={handleRegister}>Sign up</button>
    </form>
     </div>
    </div>
  );
};

export default Signup;


  // a mettre sur composant login : 

// import React, { useState } from 'react';
// import SignupPopup from './SignupPopup';

// const login = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);

  

 
// const handleSignupClick = () => {
//     setPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
    
//     <div>
//       {<div>
//       {/* Votre contenu d'application */}
//       <button onClick={handleSignupClick}>Signup</button>

//       {isPopupOpen && <Signup onClose={handleClosePopup} />}
//     </div>
//   );
// };