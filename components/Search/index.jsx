'use client'
import React, { useState, useEffect, use } from 'react'
// import data from './data.json'
import Image from 'next/image'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '@/fibase'
import { ToastContainer, toast } from 'react-toastify'
import FormModal from '../Modal'
import Loader from '../Loader'
import EditForm from '../EditForm'
import EditTaskForm from '../EditedTask'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [finalData, setFinalData] = useState([])
  const [search, setSearch] = useState('')
  const [sortedField, setSortedField] = useState(null)
  const [loading, setLoading] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])
  const [users, setUsers] = useState([])
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const [userEdit, setUserEdit] = useState({
    name: '',
    status: '',
    dueDate: '',
  })

  //user property update
  const handleChange = (e) =>
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value })

  //edit handler
  const editClickHandler = (id) => {
    setUsers(
      finalData.map((i) =>
        i.id === id ? { ...finalData.find((i) => i.id === id), edit: true } : i
      )
    )
    setIsDisplayForm(true)
    setUserEdit(finalData.find((user) => user.id === id))
  }

  //search filter
  useEffect(() => {
    setFilteredUsers(
      finalData &&
        finalData.filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.status.toLowerCase().includes(search.toLowerCase()) ||
            user.dueDate.toLowerCase().includes(search.toLowerCase())
        )
    )
  }, [finalData, search])

  const closeFormHandler = () => {
    setIsDisplayForm(false)
  }
  const onSubmit = (e, id) => {
    e.preventDefault()
    const data = users.map((user) =>
      user.id === id ? { ...user, ...userEdit, edit: false } : user
    )
    setUsers(data)
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

    // setFinalData(finalData.filter((i) => i.id !== id))
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
  }, [userEdit])

  const editHandler = (id) => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false)
    return <FormModal id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
  }
  const modalOpenHandler = () =>
    isOpen === false ? setIsOpen(true) : setIsOpen(false)
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
              placeholder='search by name and dates'
              onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            />
          </div>
        </form>
        <table className='border w-full'>
          <thead className='border '>
            <tr className='text-[10px] md:text-lg'>
              <th className='border md:p-2'>
                <button type='button' onClick={() => setSortedField('name')}>
                  Name
                </button>
              </th>
              <th className='border md:p-2 w-16 md:w-auto'>Status</th>
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
            {/* {finalData.length === 0 && (
            <div className='text-center'>
              Nothing to show, please add some tasks
            </div>
          )} */}
          </tbody>
        </table>
        {filteredUsers.map(
          (user) =>
            user.edit &&
            isDisplayForm && (
              <EditForm
                modalOpenHandler={modalOpenHandler}
                key={user.id}
                id={user.id}
                name={userEdit.name}
                email={userEdit.email}
                role={userEdit.role}
                onSubmit={onSubmit}
                closeFormHandler={closeFormHandler}
                handleChange={handleChange}
              />
            )
        )}
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
                {/* <EditForm id={} /> */}
              </div>
            </div>
          </>
        )}
      </div>
    )
}

export default Search
