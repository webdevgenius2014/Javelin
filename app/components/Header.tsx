import React from 'react'
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
type HeaderProps={
  isExpanded: boolean;  
  setIsExpanded: (val:any)=>void;
  userId?: string
}
const Header: React.FC<HeaderProps> = ({isExpanded, setIsExpanded, userId}) => {  
  return (
    <>
      <div className='fixed top-0 w-full'>
        <nav className="flex items-center justify-between bg-white py-3 px-6">
          {userId && 
          <button type="button" onClick={()=> setIsExpanded(!isExpanded)} className="text-gray-500 hover:text-gray-600" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.366667 0.900024H19.6333C19.836 0.900024 20 1.06912 20 1.27757C20 1.48602 19.836 1.65488 19.6333 1.65488H0.366667C0.164 1.65488 0 1.48624 0 1.27757C0 1.06889 0.164 0.900024 0.366667 0.900024ZM5.36667 6.04833H19.6333C19.836 6.04833 20 6.21742 20 6.42587C20 6.63432 19.836 6.80318 19.6333 6.80318H5.36667C5.164 6.80318 5 6.63432 5 6.42587C5 6.21742 5.164 6.04833 5.36667 6.04833ZM19.6333 11.1966H0.366667C0.164 11.1966 0 11.3655 0 11.5742C0 11.7826 0.164 11.9517 0.366667 11.9517H19.6333C19.836 11.9517 20 11.7826 20 11.5742C20 11.3655 19.836 11.1966 19.6333 11.1966ZM5.36667 16.3447H19.6333C19.836 16.3447 20 16.5136 20 16.7223C20 16.9309 19.836 17.1 19.6333 17.1H5.36667C5.164 17.1 5 16.9309 5 16.7223C5 16.5136 5.164 16.3447 5.36667 16.3447Z" fill="#1F263E"/>
            </svg>          
          </button>}
          <div className='flex items-center'>
            <Link href='/'>
              <div className='text-lg font-bold text-white uppercase'>
                Jevelin UI
              </div>
            </Link>
          </div>
          <div className='flex items-center text-white'>
            {!userId && (
              <>
                <Link
                  href='sign-in'
                  className='text-gray-300 hover:text-white mr-4'
                >
                  Sign In
                </Link>
                <Link
                  href='sign-up'
                  className='text-gray-300 hover:text-white mr-4'
                >
                  Sign Up
                </Link>
              </>
            )}
            {userId && (
              <Link href='profile' className='text-gray-300 hover:text-white mr-4'>
                Profile
              </Link>
            )}
            <div className='ml-auto'>
              <UserButton afterSignOutUrl='/' />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header