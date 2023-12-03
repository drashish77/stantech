import { request } from 'http'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone()

const protectedRoutes = ['/', '/create-new']

export default function middleware(req: NextRequest) {
  let isLogin = req.cookies.get('accessToken')

  if (!isLogin && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
}
