import { SidebarTrigger,UserButton } from '@/components/ui/sidebar'
import React from 'react'

function AppHeader() {
  return (
    <div>
      {/* This to close the side bar */}
      <SidebarTrigger />
      <UserButton />
    </div>
  )
}

export default AppHeader
