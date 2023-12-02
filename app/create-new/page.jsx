'use client'
import React, { useState } from 'react'

const About = () => {
  const [formError, setFormError] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    due_date: '',
    creation_date: new Date().toLocaleDateString('en-CA'),
    status: false,
  })
  console.log(new Date().toLocaleDateString())
  const onChangeHandler = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))
  }
  const validateForm = () => {
    let err = {}
    if (formData.name === '') {
      err.name = 'name required'
    }
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log('form data', formData)
    let isValid = validateForm()
    console.log({ isValid })
  }
  return (
    <div>
      <form
        className='flex items-center justify-center gap-5'
        onSubmit={onSubmitHandler}
      >
        <div className='group'>
          <label htmlFor='name' className='mr-2'>
            Name
          </label>
          <input
            type='text'
            className='p-2 border'
            name='name'
            placeholder='name'
            required
            onChange={onChangeHandler}
          />
          <span className='text-red-400'>{formError.username}</span>
        </div>
        <div className='radio flex gap-2'>
          <label className='' htmlFor='status'>
            Status
          </label>
          <div className='radio-input'>
            <input
              className='mr-2'
              type='radio'
              value={true}
              name='status'
              required
              onChange={onChangeHandler}
            />
            <label htmlFor='active'>Active</label>
          </div>
          <div className='radio-input'>
            <input
              className='mr-2'
              type='radio'
              value={false}
              name='status'
              required
              onChange={onChangeHandler}
            />
            <label htmlFor='not-active'>Not-active</label>
          </div>
        </div>
        <div className='group'>
          <label className='mr-2' htmlFor='due_date'>
            Due date
          </label>
          <input
            className='p-2 border'
            type='date'
            name='due_date'
            placeholder='due_date'
            onChange={onChangeHandler}
          />
        </div>

        <button
          className='p-2 bg-slate-300 border'
          type='button'
          onClick={() => console.log({ formData })}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default About
