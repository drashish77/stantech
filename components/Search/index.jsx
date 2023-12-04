'use client'
import React, { useState, useEffect, use } from 'react'
import Image from 'next/image'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '@/fibase'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import EditTaskForm from '../EditedTask'
import { GoSortAsc } from 'react-icons/go'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [finalData, setFinalData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [userEdit, setUserEdit] = useState({
    name: '',
    status: '',
    dueDate: '',
  })

  //edit handler
  const editClickHandler = (id) => {
    let userTemp = finalData.map((i) =>
      i.id === id ? { ...finalData.find((i) => i.id === id), edit: true } : i
    )
    setUsers([...userTemp])
    setUserEdit(finalData.find((user) => user.id === id))
  }

  const deleteHandler = async (id) => {
    const taskRef = doc(db, 'tasks', id)
    setLoading(true)
    deleteDoc(taskRef)
      .then(() => {
        // toast('The task deleted successfully')
        setFinalData(finalData.filter((i) => i.id !== id))
        setLoading(false)
        toast('Task deleted Successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      })
      .catch((error) => {
        console.error('Error removing document: ', error)
      })
  }

  const fetchPost = async () => {
    const taskRef = collection(db, 'tasks')
    setLoading(true)
    await getDocs(taskRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setFinalData(newData)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const nameSortHandler = () => {
    let sortedData = finalData.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase()

      if (fa < fb) {
        return -1
      }
      if (fa > fb) {
        return 1
      }
      return 0
    })

    setFinalData([...sortedData])
  }
  const statusSortHandler = () => {
    let sortedData = finalData.sort((a, b) => {
      let fa = a.status.toLowerCase(),
        fb = b.status.toLowerCase()

      if (fa < fb) {
        return -1
      }
      if (fa > fb) {
        return 1
      }
      return 0
    })

    setFinalData([...sortedData])
  }
  const modalOpenHandler = (isUserUpdated) => {
    if (isUserUpdated) {
      fetchPost()
    }
    isOpen === false ? setIsOpen(true) : setIsOpen(false)
  }

  if (loading === true) {
    return <Loader />
  } else
    return (
      <div className='container p-0 md:p-8'>
        <form className='md:mt-10 text-xs md:text-base'>
          <div className='group'>
            <input
              type='text'
              className='w-full border px-4 py-2'
              placeholder='search by name, status and dates'
              onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            />
          </div>
        </form>
        <table className='border w-full'>
          <thead className='border '>
            <tr className='text-[10px] md:text-lg'>
              <th className='border md:p-2 hover:bg-slate-50'>
                <button type='button ' onClick={() => nameSortHandler()}>
                  Name
                  <GoSortAsc className='inline ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:lefinline t-40' />
                </button>
              </th>
              <th
                className='border md:p-2 w-16 md:w-auto cursor-pointer hover:bg-slate-50'
                onClick={() => statusSortHandler()}
              >
                Status
                <GoSortAsc className='inline ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:lefinline t-40' />
              </th>
              <th className='border md:hidden md:p-2 w-28'>Dates</th>
              <th className='border hidden md:table-cell md:p-2'>Due Date</th>
              <th className='border hidden md:table-cell md:p-2'>Created at</th>
              <th className='border md:p-2'>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {finalData.length !== 0 &&
              finalData
                .filter((item) =>
                  search === ''
                    ? item
                    : item.name.toLowerCase().includes(search) ||
                      item.dueDate.toLowerCase().includes(search) ||
                      item.createdAt.toLowerCase().includes(search) ||
                      item.status.toLowerCase().includes(search)
                )
                .map((i) => (
                  <tr key={i.id} className='text-[10px] md:text-base'>
                    <td className='border p-1 md:p-2 input__name'>{i.name}</td>
                    <td className='border p-1 md:p-2 '>
                      {i.status === 'active' ? (
                        <div className='bg-green-500 text-white p-1 md:p-2'>
                          Active
                        </div>
                      ) : (
                        <div className='bg-red-500 text-white p-1 md:p-2'>
                          Inactive
                        </div>
                      )}
                    </td>
                    <td className='border text-[10px] md:hidden md:text-base  '>
                      <div className='bg-blue-100 p-1 md:p-2'>
                        Due at: {i.dueDate}
                      </div>
                      <div className='bg-gray-100 p-1 md:p-2'>
                        Created: {i.createdAt}
                      </div>
                    </td>
                    <td className='border text-[10px] hidden md:table-cell md:text-base p-1 md:p-2'>
                      {i.dueDate}
                    </td>
                    <td className='border text-[10px] hidden md:table-cell md:text-base p-1 md:p-2'>
                      {i.createdAt}
                    </td>
                    <td className='border p-1 md:p-2 flex justify-evenly'>
                      <button
                        onClick={() => {
                          editClickHandler(i.id)
                          modalOpenHandler()
                        }}
                      >
                        <Image
                          src='images/edit.svg'
                          alt='Vercel Logo'
                          className=' w-4 h-4 md:w-5 md:h-5'
                          width={20}
                          height={20}
                          priority
                        />
                      </button>
                      <button onClick={() => deleteHandler(i.id)}>
                        <Image
                          src='images/trash.svg'
                          alt='Vercel Logo'
                          className=' w-4 h-4 md:w-5 md:h-5'
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

        {isOpen && (
          <>
            <div className='modalWrapper'>
              <div className='modal'>
                <button
                  onClick={() => {
                    modalOpenHandler()
                  }}
                  className='close z-50 border'
                >
                  X
                </button>
                <EditTaskForm
                  modalOpenHandler={modalOpenHandler}
                  name={userEdit.name}
                  dueDate={userEdit.dueDate}
                  status={userEdit.status}
                  id={userEdit.id}
                  createdAt={undefined}
                />
              </div>
            </div>
          </>
        )}
      </div>
    )
}

export default Search
