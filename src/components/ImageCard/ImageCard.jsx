import React from 'react'
import styles from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ image, alt, likes, userName, onClick }) => {
  return (
    <div className={styles.imageCard}>
      <img className={styles.imageItem} src={image} alt={alt} onClick={onClick} />
      <div className={styles.infoContainer}>
        <p className={styles.info}>Likes: {likes}</p>
        <p className={styles.info}>Uploaded by: {userName}</p>
      </div>
    </div>
  )
}

export default ImageCard