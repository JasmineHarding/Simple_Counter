// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, bio, profilePicture }) => {
  return (
    <div style={styles.card}>
      <img src={profilePicture} alt={`${name}'s profile`} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '250px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.5em',
    margin: '10px 0',
  },
  bio: {
    fontSize: '1em',
    color: '#666',
  },
};

export default ProfileCard;
