// import { isAuthenticated } from '@/Utils/Auth'
AuthDetail
import AuthDetail from '@/components/AuthDetail'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/', '/create-new']
console.log({ AuthDetail })
export default function middleware(req: NextRequest) {
  console.log({ AuthDetail })
  if (!AuthDetail && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
}
