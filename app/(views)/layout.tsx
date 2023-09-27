import React from "react"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-64 flex-none ...">
          <Sidebar />
        </div>
        <main className="flex-1 min-w-0 overflow-auto ...">
          <Header />
          <div className='container mx-auto p-4'>     
            {children}  
          </div>
        </main>
      </div>
    </>        
  );  
}
