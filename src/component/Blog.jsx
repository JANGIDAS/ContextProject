import React from 'react'
import postt from '../contexts/createContext';
import { useContext } from 'react';
 const Blog = () => {
  const {postss}= useContext(postt)
  console.log(postss);
  
  return (
    <>
     <div>Blog</div>
    {
      postss.map((v)=>(
      <p>{v.title}</p>
      ))

    }
    </>
   )
}
export  default Blog;
