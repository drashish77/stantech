import LoginForm from '@/components/Login'
import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Login | Tasqq App',
  description: 'This is a simple task management app',
}
const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default Login
