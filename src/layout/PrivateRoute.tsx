/* eslint-disable react/prop-types */
import NotAllowed from '@/View/NotAllowed'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import React from 'react'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <NotAllowed />
      </UnauthenticatedTemplate>
    </div>
  )
}

export default PrivateRoute
