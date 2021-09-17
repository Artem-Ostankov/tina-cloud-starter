import React, { FC } from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/*// <div className="relative bg-white overflow-hidden">*/}
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
