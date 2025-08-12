import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div className='flex flex-col justify-center items-center'> 
        <h1>404 Not Found</h1>
        <Link href='/'> go to home page</Link>
    </div>
   
  )
}
