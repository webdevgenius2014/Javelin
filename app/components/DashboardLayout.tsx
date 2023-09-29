'use client';
import React, {useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
type DashboardProps={
    children?: React.ReactNode;
    userId?:string;
}
const DashboardPagesLayout: React.FC<DashboardProps> = ({children, userId}) => {
    const [isExpanded, setIsExpanded ]= useState(true);
    return (
        <>        
            <div className={`${isExpanded?'w-217':'w-16'} flex-none ...`}>
                <Sidebar isExpanded={isExpanded} />
            </div>
            <main className="flex-1 min-w-0 overflow-auto ...">
                <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} userId={userId} />
                <div className='container mx-auto p-4'>     
                    {children}  
                </div>
            </main>        
        </>
    )
}
export default DashboardPagesLayout