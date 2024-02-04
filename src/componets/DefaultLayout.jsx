import React from 'react'
import SideBar from './SideBar'
import Header from './Header'

const DefaultLayout = () => {
  return (
    <>
    <div className='flex gap-1'>
        
        <SideBar />
        <Header />
    </div>
    
    </>
  )
}

export default DefaultLayout
