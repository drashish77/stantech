'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { db } from '@/fibase'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { uuid } from 'uuidv4'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { updateFormValidationSchema } from './schema'

export interface TaskData {
  name: string
  dueDate: string
  status: string
  id: string
  createdAt: Date
  modalOpenHandler: any
}

const EditTaskForm = (data: TaskData) => {
  const [loading, setLoading] = useState(false)

  const { id, name, status, dueDate, createdAt, modalOpenHandler } = data

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      id: id,
      name: name,
      status: status,
      dueDate: dueDate,
      createdAt: createdAt,
    },
    validationSchema: updateFormValidationSchema,

    onSubmit: async (values, actions) => {
      const docRef = doc(db, 'tasks', id)
      try {
        setLoading(true)
        let data = {
          name: values.name,
          status: values.status,
          dueDate: values.dueDate,
        }
        // await updateDoc(docRef,data ).
        updateDoc(docRef, data)
          .then((docRef) => {
            toast('Task Updated!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            })
            // router.push('/')

            modalOpenHandler(true)
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (e) {
        console.error('Error updating document: ', e)
      }
    },
  })

  return (
    <div className='relative z-30 flex  w-full items-center justify-center'>
      <form
        onSubmit={formik.handleSubmit}
        className='border p-10 rounded-lg mt-20'
      >
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
          {/* {formik.touched.dueDate && formik.errors.dueDate && (
            <div className='text-xs text-red-500'>{formik.errors.dueDate}</div>
          )} */}
        </div>

        {/* Submit Button */}
        <div className='flex justify-center my-5'>
          <button type='submit' className='w-full p-2 border bg-blue-400'>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditTaskForm
