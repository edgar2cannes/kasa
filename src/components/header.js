import React from 'react'
import Navbar from '../components/navbar'
import LOGO from '../assets/LOGO.jpg'
import '../styles/header.css'

export default function Header() {
  return (
    <div className='container'>
        <img className='logo' src={LOGO} alt="logo"></img>
        <Navbar/>
    </div>
  )
}