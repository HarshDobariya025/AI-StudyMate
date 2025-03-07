import { UserProfile } from '@clerk/clerk-react'
import React from 'react'

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UserProfile />
    </div>
  )
}

export default Profile