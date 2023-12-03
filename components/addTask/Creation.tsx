'use client'

import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { db } from '@/fibase'
import { collection, addDoc } from 'firebase/firestore'
import { uuid } from 'uuidv4'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { validationSchema } from './schema'

const TaskForm: React.FC = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      id: uuid(),
      name: '',
      status: '',
      dueDate: '',
      createdAt: new Date().toLocaleDateString('en-CA'),
    },
    validationSchema: validationSchema,

    onSubmit: async (values, actions) => {
      try {
        const docRef = await addDoc(collection(db, 'tasks'), {
          ...values,
        })

        actions.resetForm({
          values: {
            id: '',
            name: '',
            status: '',
            dueDate: '',
            createdAt: new Date().toLocaleDateString('en-CA'),
          },
          // you can also set the other form states here
        })
        toast('Task added!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        router.push('/')
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    },
  })

  return (
    <div className='relative z-30 flex  w-full items-center justify-center'>
      <form onSubmit={formik.handleSubmit} className='border p-10 rounded-lg'>
        {/* Name Input */}
        <div className=''>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder='Enter task name here..'
            className='p-2 border'
          />
          {formik.touched.name && formik.errors.name && (
            <div className='text-xs text-red-500'>{formik.errors.name}</div>
          )}
        </div>

        {/* Status Radio Buttons */}
        <div className=''>
          <div className='flex gap-2 my-5'>
            <label>Status:</label>
            <div className='space-x-5 ml-5'>
              <label>
                <input
                  type='radio'
                  name='status'
                  value='active'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.status === 'active'}
                />
                Active
              </label>
              <label>
                <input
                  type='radio'
                  name='status'
                  value='inactive'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.status === 'inactive'}
                />
                Inactive
              </label>
            </div>
          </div>
          {formik.touched.status && formik.errors.status && (
            <div className='text-xs text-red-500'>{formik.errors.status}</div>
          )}
        </div>

        {/* Due Date Input */}
        <div>
          <label htmlFor='dueDate'>Due Date:</label>
          <input
            type='date'
            id='dueDate'
            name='dueDate'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dueDate}
            className='p-2 border ml-5'
          />
          {formik.touched.dueDate && formik.errors.dueDate && (
            <div className='text-xs text-red-500'>{formik.errors.dueDate}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className='flex justify-center my-5'>
          <button type='submit' className='w-full p-2 border'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
