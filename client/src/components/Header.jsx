import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-indigo-200 shadow-md'>
<div className=' flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to={'/'}>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=' text-indigo-500'>Real</span>
            <span className=' text-indigo-700'>State</span>
        </h1>
        </Link>
        <form className='bg-indigo-100 p-3 rounded-lg flex items-center'>

            <input type="text" placeholder='search' className=' bg-transparent outline-none w-24 sm:w-64' />
            <FaSearch className=' text-indigo-600'/>
        </form>

        <ul className=' flex gap-4'>
            <Link to={'/'}>
            <li className='hidden sm:inline text-indigo-700 transition ease-in-out delay-3500 hover:text-indigo-900 hover:font-bold hover:cursor-pointer '>Home</li>
            </Link>

            <Link to={'/about'}>
            <li className='hidden sm:inline text-indigo-700 transition ease-in-out delay-3500 hover:text-indigo-900 hover:font-bold hover:cursor-pointer'>About</li>

            </Link>
            <Link to={'/sign-in'}>
            <li className=' text-indigo-700 transition ease-in-out delay-3500 hover:text-indigo-900 hover:font-bold hover:cursor-pointer'>Sign in</li>

            </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header