import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Tweet.module.css';
import { removeTweet,addTweet } from '../reducers/tweet';
import styles from '../styles/Tweet.module.css';


function Tweet(props) {
  const [likeTweet, setLikeTweet] = useState(0);
  const [remove, setRemove] = useState();


  // Like tweet
  const handleLikeTweet = () => {
    setLikeTweet(likeCount + 1);
  };
  let heartIconStyle = { 'cursor': 'pointer' };
  if (likeTweet > 0) {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }


  // Remove tweet à compélter
   	const handleRemove = () => {
   dispatch(removeTweet(props))}


  return (
    <div className={styles.home}>
        <h1>HOME</h1>
        <div className={styles.newtweet}>
          <input> What's Up</input> 
          <p className={styles.compter}> .... /230</p>
          <button>Tweet</button>
        </div>
        
        <div className={styles.tweet}>
          <img className={styles.avatar} src="avatar.png" alt="avatar"/>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.username}>@ {props.username}</span>
          <span className={styles.time}>  _ temps écoulé {props.time}</span>
          <p className={styles.message}>{props.message}</p>
        </div>
    
        <div className={styles.iconContainer}>
          <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /> ({likeCount})</span>
          <span><FontAwesomeIcon icon={faTrash} onClick={() => handleRemove()} style={trashIconStyle} className="remove" /></span>
        </div>
      </div>
  );
}

export default Tweet;
