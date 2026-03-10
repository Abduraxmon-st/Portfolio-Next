import { AdminNavbar } from '@/components/admin/navbar';
import { DashboardSidebar } from '@/components/admin/sidebar';
import React from 'react'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex gap-3 lg:gap-4 min-h-dvh max-h-dvh h-dvh min-w-screen w-screen max-w-screen py-3 lg:py-4 px-3 overflow-hidden'>
      <DashboardSidebar className='hidden md:flex bg-borderColor/50 rounded-md lg:rounded-xl text-descColor!' />
      <div style={{ scrollbarWidth: "none" }} className='flex-1 flex flex-col gap-3 lg:gap-4'>
        <AdminNavbar />
        <div className="overflow-auto bg-borderColor/50 text-descColor! rounded-md lg:rounded-xl p-4 flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout