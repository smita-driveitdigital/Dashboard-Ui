import React from 'react'
import UserForm from '../UserForm/userForm'

export default function DashboardMain() {
  return (
    <div className='dashboardContent bg-white h-100'>
      <main>
        <div>
            <h1 className="sidebar-title font-bold">Dashboard Content</h1>
            <UserForm/>
        </div>
      </main>
    </div>
  )
}
