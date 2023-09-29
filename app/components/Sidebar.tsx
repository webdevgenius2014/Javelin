'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../styles/styles.module.scss'
import { SettingsIcon, HomeIcon, AnalyticsIcon, AccountsIcon, PlaygroundIcon, PowerOff } from '../components/icons/svgIcons'
import { KeyIcon, AlertIcon, CloudComputing, DocumentationIcon, SupportIcon } from '../components/icons/pngIcons';
type SidebarProps={
    isExpanded?: boolean;     
}
const Sidebar: React.FC<SidebarProps> = ({isExpanded}) => {
    console.log('isExpanded: '+isExpanded);
    const currentRoute = usePathname(); 
    return (
        <>  
            <div id="docs-sidebar" className={`hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] bg-white border-r border-gray-200 pt-5 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 ${isExpanded?'w-217 expanded':'w-16'}`}>
                <div className={`pb-2  border-white-900 ${isExpanded?'ml-6 w-166':'ml-4 w-16'}`}>
                    <a className={`flex-none ${styles.brand_text} text-black dark:text-white ${!isExpanded && 'text-sm'}`} href="/" aria-label="Brand">{isExpanded?'Javelin': 'Jav'}</a>
                </div>
                <nav className="py-6 w-full flex flex-col space-between flex-wrap">
                    <ul className="space-y-1.5">
                        <li>
                            <a className={`flex items-center gap-x-3.5 py-2 px-4 text-sm  hover:bg-gray-200 hover:text-white ${currentRoute==='/dashboard' || currentRoute==='/'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/dashboard">
                                <HomeIcon />
                                {isExpanded && <span>Dashboard</span>}
                            </a>
                        </li>
                        <li>
                            <a className={`flex items-center gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/gateways'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <SettingsIcon />
                                {isExpanded && 'Gateways'}
                            </a>
                        </li>
                        <li>
                            <a className={`flex items-center gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/key-vault'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <KeyIcon />
                                {isExpanded && 'Key Vault'}
                            </a>
                        </li>
                        <li>
                            <a className={`flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm  hover:bg-gray-200 hover:text-white ${currentRoute==='/alerts'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <AlertIcon />
                                {isExpanded && 'Alerts'}
                            </a>
                        </li>                        
                        <li>
                            <div className="collapse">
                                <input type="checkbox" /> 
                                <div className="collapse-title flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm text-black-500 hover:bg-gray-200 dark:bg-gray-900 dark:text-white">
                                    <AccountsIcon />
                                    {isExpanded && 'Account'}
                                    {/* <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg> */}
                                    <svg className="ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                                <div className="collapse-content"> 
                                    <ul className="pt-2 pl-2">
                                        <li>
                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="/">
                                            Users
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="/">
                                            Billing
                                            </a>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className={`flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/integrations'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <CloudComputing />
                                {isExpanded && 'Integrations'}
                            </a>
                        </li>
                    </ul>
                    <div className='p-2'>
                        <hr className='border-t-0 border-b-2 border-blue-800' />                        
                    </div>
                    <ul>
                        <li>
                            <a className={`flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/playground'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <PlaygroundIcon />
                                {isExpanded && 'Playground'}
                            </a>
                        </li>
                        <li>
                            <a className={`flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/documentation'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <DocumentationIcon />
                                {isExpanded && 'Documentation'}
                            </a>
                        </li>
                        <li>
                            <a className={`flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/support'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <SupportIcon />
                                {isExpanded && 'Support'}
                            </a>                    
                        </li>
                        <li>
                            <a className={`flex items-center space-y-1 gap-x-3.5 py-2 px-4 text-sm hover:bg-gray-200 hover:text-white ${currentRoute==='/logout'?'bg-primary-300 text-white':'bg-white text-black-500'}`} href="/">
                                <PowerOff />
                                {isExpanded && 'Logout'}
                            </a>                    
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Sidebar