import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div>
      <h1>RegisterScreen</h1>
      <Link to='/auth/login'>
        Login
      </Link>
    </div>
  )
}
