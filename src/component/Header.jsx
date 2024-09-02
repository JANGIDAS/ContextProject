import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";

 const Header = () => {
  return (
    <>
    <nav>
      <div className='logo'><h4>logo</h4></div>
      <ul>
        <li><Link to={'/'}>home</Link></li>
        <li> <Link to={'/product'}>Products</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/blogs'}>blogs</Link></li>
      </ul>
      <Link to={'/Addcart'}><GrCart /></Link>
      </nav>
    </>
  )
}
export default Header
