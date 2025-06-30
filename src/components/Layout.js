import React from 'react'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import Seo from './Seo'
import Footer from './Footer'

const Layout = ({children}) => {
  return (

    <>
    <NavigationBar/>
      <Seo title="Home" description="Learn more about our team and mission." />
  
        {children}
  <Footer/>
    </>
  )
}

export default Layout