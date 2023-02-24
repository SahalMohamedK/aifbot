import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebaseConfig'
import { Link, useLocation } from 'react-router-dom'
import { classNames } from '../utils'

export default function Dashboard({children, title}) {
    const [user, setUser] = useState({})
    const location = useLocation();

    onAuthStateChanged(auth, (_user) => {
        setUser(_user)
    })
  return (
    <div className='h-screen'>
        <div className='flex h-full'>
            <div className='w-1/5 h-full flex flex-col'>
                <div className='p-5 text-center font-bold text-3xl border-b'>AIF Bot</div>
                <Link to='/overview'>
                    <div className={classNames('p-5 border-b text-lg font-bold hover:bg-gray-100', location.pathname == '/overview'? 'bg-gray-100': '')}>Overview</div>
                </Link>
                <Link to='/robots'>
                    <div className={classNames('p-5 border-b text-lg font-bold hover:bg-gray-100', location.pathname == '/robots'? 'bg-gray-100': '')}>Robots</div>
                </Link>
                <Link to='/tasks'>
                    <div className={classNames('p-5 border-b text-lg font-bold hover:bg-gray-100', location.pathname == '/tasks'? 'bg-gray-100': '')}>Tasks</div>
                </Link>
                <Link to='/settings'>
                    <div className={classNames('p-5 border-b text-lg font-bold hover:bg-gray-100', location.pathname == '/settings'? 'bg-gray-100': '')}>Settings</div>
                </Link>
                <div className='p-5 border-t flex mt-auto space-x-2 items-center'>
                    <img className='rounded-full h-10 w-10' src={user.photoURL} alt="" />
                    <div className='font-bold'>{user.displayName}</div>
                </div>
            </div>
            <div className='w-4/5 h-full border-l flex flex-col'>
                <div className='p-5 font-bold text-3xl border-b'>{title}</div>
                <div className='p-5 grow relative'>
                      {children}
                </div>
            </div>
        </div>
    </div>
  )
}
