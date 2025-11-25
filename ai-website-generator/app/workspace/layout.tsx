import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar';

function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
    <div>
      {children}
    </div>
    </SidebarProvider>
  )
}

export default WorkspaceLayout
