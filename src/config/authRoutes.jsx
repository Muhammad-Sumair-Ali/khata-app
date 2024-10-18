import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/userContext'

const AuthRoutes = (  {children}) => {
  const {user} = useAuth()
 const navigate = useNavigate()
  useEffect(() => {
     
        if(!user.token){
            navigate("/login")
          }
  }, [user.token && user ])
  return (
    <Outlet>
      {children}
    </Outlet>
  )
}

export default AuthRoutes
