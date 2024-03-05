import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaHeart } from 'react-icons/fa'; 
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';
import './Principal.css';
import { useNavigate } from 'react-router-dom';

function Principal() {
    const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };
  useEffect(() => {
    axios.get('http://localhost:5000/postari')
      .then(async (response) => {
        const posts = response.data.map(async (post) => {
          const userId = post.utilizator.$id;
          const userResponse = await axios.get(`http://localhost:5000/utilizator/${userId}`);
          const userName = userResponse.data;
          const formattedTags = post.relevanta.etichete.map(tag => `#${tag}`).join(' '); 
          const postDate = new Date(post.data_ora_postarii);
          const formattedDate = postDate.toLocaleDateString('en-US'); 
          const formattedTime = postDate.toLocaleTimeString('en-US'); 
          const commentsResponse = await axios.get(`http://localhost:5000/comentarii?postareId=${post._id}`);
          const relevantComments = commentsResponse.data.filter(comment => comment.postare.$id === post._id);
          const reactions = post.reactie.map(async (reaction, index) => {
            const userId = reaction.utilizator.$id;
            const userResponse = await axios.get(`http://localhost:5000/utilizator/${userId}`);
            const userName = userResponse.data; 
            let reactionIcon;
            if (reaction.apreciere === 'like') {
              reactionIcon = <FaThumbsUp style={{color:"#0080FE"}}/>;
            } else if (reaction.apreciere === 'inima') {
              reactionIcon = <FaHeart style={{color:"#db7093"}}/>;
            }
            return (
              <span key={index}>
                {userName}  {reactionIcon}
              </span>
            );
          });
          const formattedReactions = await Promise.all(reactions);
          const formattedComments = relevantComments.map(async (comment) => {
            const userId = comment.utilizator.$id;
            const userResponse = await axios.get(`http://localhost:5000/utilizator/${userId}`);
            const userName = userResponse.data; 
            return (
              <div key={comment._id} className="comentariu">
                <p className='utilizatorc' onClick={() => handleUserClick(userId)}> {userName}</p>
                <p className='textc'> {comment.text}</p>
                <p className='datac'> {new Date(comment.data_comentariu).toLocaleString('en-US')}</p>
              </div>
            );
          });
          const formattedRelevantComments = await Promise.all(formattedComments);
          return { ...post, userName, formattedTags, formattedDate, formattedTime, formattedReactions, formattedRelevantComments };
        });
        const resolvedPosts = await Promise.all(posts);
        setPostData(resolvedPosts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {postData.map((post) => (
         <div key={post._id} className="postare">
           <p className='utilizatorp' onClick={() => handleUserClick(post.utilizator.$id)}>
             {post.userName}
          </p>
          <p className='textp'>{post.text}</p>
          <p className='descriere'>{post.descriere}</p>
          <p className='locatie'><CiLocationOn style={{color:"#EF7215"}}/> {post.relevanta.locatie}</p>
          <p className='etichete'>{post.formattedTags}</p>
          <p className='datap'>{post.formattedDate} {post.formattedTime}</p> 
          <p>
          <table>
  <thead>
    <tr>
      <th>Nume utilizator</th>
      <th>Aprecieri</th>
    </tr>
  </thead>
  <tbody>
    {post.formattedReactions.map((reaction, index) => (
      <tr key={index}>
        <td>{reaction.props.children[0]} {/* Nume utilizator */}</td>
        <td>{reaction.props.children[2]} {/* Aprecieri */}</td>
      </tr>
    ))}
  </tbody>
</table>
          </p>
            {post.formattedRelevantComments}
        </div>
      ))}
    </div>
  );
}

export default Principal;