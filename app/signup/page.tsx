import React from 'react'
import type { Metadata } from 'next'
import SignUpForm from '@/components/SignUp'
export const metadata: Metadata = {
  title: 'SignUp | Tasqq App',
  description: 'This is a simple task management app',
}
const SignUp = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default SignUp
