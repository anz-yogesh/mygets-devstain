/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { MyGetsButton } from '@/components/Buttons/Button'
import { useMsal } from '@azure/msal-react'
import { useCookies } from 'react-cookie'
import React from 'react'

const Logout = () => {
  const { instance, accounts } = useMsal()
  const [cookies, setCookie, removeCookie] = useCookies(['myGetsToken'])
  const handleLogout = async () => {
    try {
      if (accounts.length > 0) {
        await instance.logoutRedirect({
          postLogoutRedirectUri: 'http://localhost:3000',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return <MyGetsButton onClick={handleLogout}>Logout</MyGetsButton>
}

export default Logout
