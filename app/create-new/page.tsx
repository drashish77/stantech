// import CreateTask from '@/components/AddTask'
import React from 'react'
import type { Metadata } from 'next'
import MyForm from '@/components/addTask/Creation'

export const metadata: Metadata = {
  title: 'Add Task | Tasqq App',
  description: 'This is a simple task management app',
}
const CreateNewTask = () => {
  return (
    <div>
      {/* <CreateTask /> */}
      <MyForm />
    </div>
  )
}

export default CreateNewTask
