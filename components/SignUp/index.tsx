'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { formSchema } from './schema'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { GoSortDesc } from 'react-icons/go'

import { MdPassword } from 'react-icons/md'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/fibase'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Link from 'next/link'

const SignUpForm = () => {
  const router = useRouter()

  interface FormValues {
    email: string
    password: string
  }

  const initialValues: FormValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (
    values: FormValues,
    actions: { resetForm: () => void }
  ) => {
    const payload = {
      email: values.email,
      password: values.password,
    }

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Sign up
        const user = userCredential.user
        toast('SignUp successful')
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div className={`relative z-30 flex  w-full items-center justify-center `}>
      <div className='rounded'>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            const { errors, values, touched } = props
            return (
              <Form className='border p-10 rounded-lg'>
                <h3 className=' mb-8 text-center text-2xl font-bold text-[#020066]'>
                  SignUp
                </h3>
                {/* {JSON.stringify(props.values)} */}
                <div className=''>
                  <div className='h-[90px]'>
                    <div
                      className={
                        'flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-2 '
                      }
                    >
                      <MdOutlineDriveFileRenameOutline className='ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40' />
                      <Field
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        className='w-full  px-2 py-2 outline-none'
                      />
                    </div>
                    <div className='mt-1 text-xs text-red-500 '>
                      <ErrorMessage name='email' />
                    </div>
                  </div>
                  <div className='h-[90px]'>
                    <div
                      className={
                        'flex items-center gap-2 rounded-lg border-[1px]  border-black/20 p-2 '
                      }
                    >
                      <MdPassword className='ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:left-40' />
                      <Field
                        type='text'
                        name='password'
                        placeholder='Enter your password'
                        className='w-full  px-2 py-2 outline-none'
                      />
                    </div>
                    <div className='mt-1 text-xs text-red-500 '>
                      <ErrorMessage name='password' />
                    </div>
                  </div>
                </div>
                <p className='-mt-5 text-right'>
                  <Link
                    href='/login'
                    className='text-blue-500 hover:underline cursor-pointer'
                  >
                    Login
                  </Link>
                </p>
                <div className=' relative'>
                  <button
                    type='submit'
                    // disabled={props.isSubmitting}
                    className='bg-blue-400 group relative mt-4  w-full rounded-full px-10 py-3 text-center text-white transition-all duration-[400ms] hover:md:-translate-y-1'
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default SignUpForm
