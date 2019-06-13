import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

function Feed() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      try {
        const response = await api.get('/posts');
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.log(error);
        if (error) alert('Deu rium na request');
      }
    }
    getPost();
  }, []);

  function handleLike(id) {
    api.post(`/posts/${id}/like`);
  }
  return (
    <section id="post-list">
      {posts.map(post => (
        <article key={post._id}>
          <header>
            <div className="user-info">
              <span>{post.author}</span>
              <span className="place">{post.place}</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src={`http://localhost:3333/files/${post.image}`} alt={post.image} />

          <footer>
            <div className="actions">
              <button type="button" onClick={() => handleLike(post._id)}>
                <img src={like} alt="" />
              </button>
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>
              {post.likes}
              {' '}
likes
            </strong>

            <p>
              {post.description}
              <span>{post.hashtags}</span>
            </p>
          </footer>
        </article>
      ))}
    </section>
  );
}

export default Feed;
