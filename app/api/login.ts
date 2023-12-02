// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string
  data?: any
  error?: string
}
const users = [
  {
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    email: 'user@gmail.com',
    password: 'user123',
    role: 'user',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email
  const password = req.body.password
  const userData = users.find((u) => u.email === email)
  if (userData) {
    if (userData.password === password) {
      res.status(200).send({
        status: 'success',
        data: { email: userData.email, role: userData.role },
      })
    } else {
      res.status(404).send({ status: 'error', error: 'Password Incorrect' })
    }
  } else {
    res.status(404).send({ status: 'error', error: 'User not found' })
  }
}
