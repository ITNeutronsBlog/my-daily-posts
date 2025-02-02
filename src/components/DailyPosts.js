import React, { useEffect, useState } from 'react';

const DailyPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/daily-posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching daily posts', err));
  }, []);

  return (
    <div>
      <h2>Daily Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.media && <img src={post.media} alt="media" />}
        </div>
      ))}
    </div>
  );
};

export default DailyPosts;