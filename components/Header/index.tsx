'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuHandler = () => {
    setIsOpen((current) => !current)
  }
  return (
    <header className='shadow header sticky top-0 z-40  bg-white'>
      <nav className='sticky top-0 flex  h-[100px] items-center justify-between p-4 lg:container '>
        <div className=''>
          <Link href='/'>
            <p className='font-bold text-4xl'>TM</p>
          </Link>
        </div>
        <div className='hidden items-center gap-12  md:flex'>
          <Link href='/'>
            <div className='cursor-pointer text-base font-semibold tracking-[0.5px] text-[#020066]'>
              Home
            </div>
          </Link>
          <div className='flex cursor-pointer items-center gap-2'>
            <Link href='/create-new'>
              <div className='text-base font-semibold tracking-[0.5px] text-[#020066]'>
                Create new task
              </div>
            </Link>
          </div>
          <Link href='/login'>
            <div className='hover::-translate-y-1 cursor-pointer text-base font-semibold tracking-[0.5px] text-[#020066]'>
              Login
              <Image
                src='images/login.svg'
                alt='Vercel Logo'
                className='text-red-500 inline ml-2'
                width={20}
                height={20}
                priority
              />
            </div>
          </Link>
        </div>
        <div className=' block md:hidden'>
          {isOpen ? (
            <div className='absolute right-0 top-0 z-[9999] flex h-[100vh] w-full origin-top-right transform justify-end bg-black/40 transition '>
              <div className='w-2/3 bg-white p-5 text-sm tracking-[0.5px]'>
                <div
                  className='absolute right-4 top-[38px]'
                  onClick={menuHandler}
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.8'
                      d='M4 4L20 20'
                      stroke='url(#paint0_linear_809_7302)'
                      stroke-width='3'
                      stroke-linecap='square'
                    />
                    <path
                      opacity='0.8'
                      d='M4 20L20 4'
                      stroke='url(#paint1_linear_809_7302)'
                      stroke-width='3'
                      stroke-linecap='square'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_809_7302'
                        x1='4.35446'
                        y1='3.64554'
                        x2='20.3545'
                        y2='19.6455'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#0500FF' />
                        <stop offset='1' stop-color='#8A47F3' />
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_809_7302'
                        x1='3.64554'
                        y1='19.6455'
                        x2='19.6455'
                        y2='3.64554'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#0500FF' />
                        <stop offset='1' stop-color='#8A47F3' />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <ul className='mt-20 flex flex-col gap-5'>
                  <li className='my-2  px-2 py-1'>
                    <Link href='/' onClick={menuHandler}>
                      <div className='cursor-pointer  font-semibold tracking-[0.5px] text-[#020066]'>
                        Home
                      </div>
                    </Link>
                  </li>
                  <li className='my-2  px-2 py-1'>
                    <Link href='create-new' onClick={menuHandler}>
                      <div className=' font-semibold tracking-[0.5px] text-[#020066]'>
                        Create New task
                      </div>
                    </Link>
                  </li>
                  <li className='my-2  px-2 py-1' onClick={menuHandler}>
                    <Link href='jobs'>
                      <div className='hover::-translate-y-1 cursor-pointer  font-semibold tracking-[0.5px] text-[#020066]'>
                        Login
                        <Image
                          src='images/login.svg'
                          alt='Vercel Logo'
                          className='text-red-500 inline ml-2'
                          width={20}
                          height={20}
                          priority
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className=''>
              <div className='' onClick={menuHandler}>
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='block  transition-all duration-300 group-open:rotate-90'
                >
                  <g clipPath='url(#clip0_1455_269)'>
                    <path
                      opacity='0.8'
                      d='M1.12524 8H23.1252'
                      stroke='url(#paint0_linear_1455_269)'
                      stroke-width='3'
                      stroke-linecap='square'
                    />
                    <path
                      opacity='0.8'
                      d='M1.12524 17H23.1252'
                      stroke='url(#paint1_linear_1455_269)'
                      stroke-width='3'
                      stroke-linecap='square'
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_1455_269'
                      x1='1.12524'
                      y1='7.49872'
                      x2='23.1252'
                      y2='7.49872'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#0500FF' />
                      <stop offset='1' stop-color='#8A47F3' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_1455_269'
                      x1='1.12524'
                      y1='16.4987'
                      x2='23.1252'
                      y2='16.4987'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#0500FF' />
                      <stop offset='1' stop-color='#8A47F3' />
                    </linearGradient>
                    <clipPath id='clip0_1455_269'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0.125244)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header