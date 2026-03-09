import { DashboardSidebar } from '@/components/admin/sidebar/DashboardSidebar';
import React from 'react'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex gap-4 min-h-dvh max-h-dvh h-dvh min-w-screen w-screen max-w-screen py-4 px-3 overflow-hidden'>
      <DashboardSidebar className='bg-borderColor/50 rounded-xl text-descColor!' />
      <div style={{ scrollbarWidth: "none" }} className='flex-1 overflow-y-auto bg-borderColor/50 text-descColor! rounded-xl p-4'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout