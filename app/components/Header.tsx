import React from 'react'
import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';
const Header = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="flex items-center justify-between bg-blue-700 py-3 px-3">
        {userId && <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
          <span className="sr-only">Toggle Navigation</span>
          <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" fill='#fff'/>
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
    </>
  )
}

export default Header