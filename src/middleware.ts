import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.has('myGetsToken')

  if (token) {
    return NextResponse.next()
  }
  return NextResponse.redirect('http://localhost:3000/')
}
export const config = {
  matcher: '/dashboard',
}
