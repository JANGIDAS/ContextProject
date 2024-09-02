import React, { useState, useEffect, createContext } from 'react';

// Ensure this context is correctly imported/created
export const PostsContext = createContext();

function Blogs({ children }) {
  const [posts, setPostData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
}

export default Blogs;
