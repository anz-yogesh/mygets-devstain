/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Logout from '@/View/Logout/Logout'
import { MyGetsTable } from '@/components/Tables/Table'
import { b2cPolicies } from '@/config/authConfig'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react'
import { Inter } from 'next/font/google'
import React, { use, useEffect } from 'react'
import { MyGetsButton } from '@/components/Buttons/Button'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { instance, accounts } = useMsal()
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['myGetsToken'])

  // checks if user is logged in. If not, remove cookie
  useEffect(() => {
    if (accounts.length === 0) {
      removeCookie('myGetsToken')
    }
  }, [accounts.length, removeCookie])

  // login function
  const handleAuth = async (authority: any) => {
    try {
      const myGetsAuth = await instance.loginPopup({
        authority,
        scopes: ['openid', 'profile', 'offline_access'],
      })
      setCookie('myGetsToken', myGetsAuth.idToken, {
        path: '/',
      })
      router.push('/')
    } catch (error) {
      console.error('Authentication failed: ', error)
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <UnauthenticatedTemplate>
          <MyGetsButton
            onClick={() =>
              handleAuth(b2cPolicies.authorities.signInSignUp.authority)
            }
          >
            Login with Azure
          </MyGetsButton>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <Logout />
          <MyGetsTable />
        </AuthenticatedTemplate>
      </div>
    </main>
  )
}
