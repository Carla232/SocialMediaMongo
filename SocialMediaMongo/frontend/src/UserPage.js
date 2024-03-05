import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserPage.css';

function UserPage() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/utilizator1/${userId}`);
        setUserData(response.data);
        const friends = response.data.prieteni;
        const friendsDetails = await Promise.all(friends.map(async (friendId) => {
          const friendResponse = await axios.get(`http://localhost:5000/utilizator/${friendId}`);
          return friendResponse.data;
        }));
        setFriendsData(friendsDetails);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Așteaptă...</div>;
  }

  return (
    <div className='detalii'>
     <h2>Detalii utilizator</h2>
      <p>Nume: {userData.nume}</p>
      <p>Prenume: {userData.prenume}</p>
      <p>Email: {userData.email}</p>
      <p>Data nastere: {new Date(userData.data_nastere).toLocaleString('en-US')}</p>
      <p>Gen: {userData.gen}</p>
      <h4>Prieteni:</h4>
      <ul>
        {friendsData.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;