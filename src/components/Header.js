import React from 'react'
import Logo from '../common/Logo'
import HeaderNav from './HeaderNav'

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <HeaderNav />
    </div>
  )
}

export default Header