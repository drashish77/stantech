'use client'
import React, { useState } from 'react'
import data from './data.json'
import Image from 'next/image'

const Search = () => {
  const [finalData, setFinalData] = useState(data)
  const [search, setSearch] = useState('')
  const [sortedField, setSortedField] = useState(null)

  const deleteHandler = (id) => {
    setFinalData(finalData.filter((i) => i.id !== id))
  }

  const editHandler = (id) => {
    // setFinalData(finalData.filter((i) => i.id !== id))
  }

  return (
    <div className='container'>
      <form className='md:mt-10 text-xs md:text-base'>
        <div className='group'>
          <input
            type='text'
            className='w-full border px-4 py-2'
            placeholder='search by name and dates'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      <table className='border w-full'>
        <thead className='border '>
          <tr className=''>
            <th className='border text-xs md:text-lg md:p-2'>
              <button type='button' onClick={() => setSortedField('name')}>
                Name
              </button>
            </th>
            <th className='border text-xs md:text-lg md:p-2'>Status</th>
            <th className='border text-xs md:text-lg md:p-2'>Due Date</th>
            <th className='border text-xs md:text-lg md:p-2'>Created at</th>
            <th className='border text-xs md:text-lg md:p-2'>Actions</th>
          </tr>
        </thead>
        <tbody className=''>
          {finalData
            .filter((item) =>
              search.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search) ||
                  item.due_date.toLowerCase().includes(search) ||
                  item.creation_date.toLowerCase().includes(search)
            )
            .map((i) => (
              <tr key={i.id} className='text-xs md:text-base'>
                <td className='border p-1 md:p-2'>{i.name}</td>
                <td className='border p-1 md:p-2 '>
                  {i.status === true ? (
                    <div className='bg-green-500 text-white p-2'>Active</div>
                  ) : (
                    <div className='bg-red-500 text-white p-2'>Not active</div>
                  )}
                </td>
                <td className='border p-1 md:p-2'>{i.due_date}</td>
                <td className='border p-1 md:p-2'>{i.creation_date}</td>
                <td className='border p-1 md:p-2 flex justify-evenly'>
                  <button onClick={() => editHandler(i.id)}>
                    <Image
                      src='images/edit.svg'
                      alt='Vercel Logo'
                      className='text-green-500'
                      width={20}
                      height={20}
                      priority
                    />
                  </button>
                  <button onClick={() => deleteHandler(i.id)}>
                    <Image
                      src='images/trash.svg'
                      alt='Vercel Logo'
                      className='text-red-500'
                      width={20}
                      height={20}
                      priority
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Search
