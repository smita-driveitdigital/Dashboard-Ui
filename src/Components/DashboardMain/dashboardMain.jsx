import React from 'react'
import UserForm from '../UserForm/userForm'
import Contribution from '../Contribution/Contribution';
import AttendEvents from '../AttendEvents/AttendEvents';
import MyAccount from '../MyAccount/MyAccount';

export default function DashboardMain({ activePage }) {
  const renderContent = () => {
    switch (activePage) {
      case "my-account":
      return <MyAccount/>;

      case "contribution":
      return <Contribution/>;

      case "AttendEvent":
      return <AttendEvents/>; 
    }
  }
  return (
    <div className='dashboardContent bg-white h-100'>
      <main>
        <div>
            <h1 className="sidebar-title font-bold mb-0">Dashboard Content</h1>
        </div>
        <div className="content p-4">
      {renderContent()}
    </div>
      </main>
    </div>
  )
}
