import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='posts_container'>
      {
        posts.map(post => (
          <Link to={`/post/${post._id}`} className='post' key={post._id}> 
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={post.file} alt={post.title} />
                  </td>
                  <td>          
                    <div className='post_text'>
                      <h2>{post.title}</h2>
                      <p>{post.description}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Link>
        ))
      }
    </div>
  );
}

export default Home;