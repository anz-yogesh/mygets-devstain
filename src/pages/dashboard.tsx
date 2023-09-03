/* eslint-disable react-hooks/rules-of-hooks */
// pages/dashboard.js
import Logout from '@/View/Logout/Logout'
import { MyGetsTable } from '@/components/Tables/Table'
import PrivateRoute from '@/layout/PrivateRoute'
import React from 'react'

const Dashboard = () => {
  return (
    <PrivateRoute>
      <Logout />
      <MyGetsTable />
    </PrivateRoute>
  )
}

export default Dashboard
