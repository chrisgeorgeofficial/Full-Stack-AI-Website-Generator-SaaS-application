import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { UserButton } from '@clerk/nextjs';

function AppHeader() {
  return (
    <div className='flex justify-between items-center p-4 shadow'>
      {/* This to close the side bar */}
      <SidebarTrigger />
      <UserButton />
    </div>
  )
}

export default AppHeader
