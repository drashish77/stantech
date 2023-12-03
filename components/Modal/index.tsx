'use client'
import { useState } from 'react'

export default function FormModal({
  isOpen,
  modalOpenHandler,
}: {
  isOpen: any
  id: string
  modalOpenHandler: any
}) {
  return (
    <div className=''>
      {isOpen && (
        <>
          <div className='modalWrapper'>
            <div className='modal'>
              <button onClick={modalOpenHandler} className='close'>
                X
              </button>
              <h3>This is my modal</h3>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
