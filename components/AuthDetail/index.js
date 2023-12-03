import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/fibase'

const AuthDetail = () => {
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])
  return authUser
}

export default AuthDetail
