import { useRouter } from 'next/router'
import React from 'react'

const NotAllowed = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push('/')
  }, [router])

  return (
    <>
      <span className="text-red-500">helo</span>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      </div>
    </>
  )
}

export default NotAllowed
