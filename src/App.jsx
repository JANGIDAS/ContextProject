import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Context, PostContext } from './contexts/createContext'; // Corrected import
import Products from './component/Products';
import Header from './component/Header';
import Home from './component/Home';
import NotFound from './component/NotFound';
import AddToCart from './component/AddToCart';
import Blog from './component/Blog';

function App() {
  const { datas } = useContext(Context);  // Corrected usage
  const { postss } = useContext(PostContext);  // Corrected usage
 
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/Addcart' element={<AddToCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
