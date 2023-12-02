import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // Extract data from the request body
  const { task_name, status, due_date, created_at } = req.body

  // Perform your database or file storage operations here
  // For simplicity, let's just log the data for now
  console.log('Received Task Data:', {
    task_name,
    status,
    due_date,
    created_at,
  })

  // Send a response
  res.status(200).json({ message: 'Task saved successfully!' })
}
