// pages/api/saveTask.js
import { firestore } from '../../firebase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const { task_name, status, due_date, created_at } = req.body

    // Save data to Firestore
    const docRef = await firestore.collection('tasks').add({
      task_name,
      status,
      due_date,
      created_at,
    })

    console.log('Document written with ID:', docRef.id)

    res.status(200).json({ message: 'Task saved successfully!' })
  } catch (error) {
    console.error('Error saving task:', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
