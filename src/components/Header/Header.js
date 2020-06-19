import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <header className={'header'}>
      <p>
        <Link to={'/'}>HOME</Link>
      </p>
      <p>
        <Link to={'/test'}>TEST</Link>
      </p>
      <p>
        <Link to={'/login'}>LOGIN</Link>
      </p>
    </header>
  )
}

export default Header
