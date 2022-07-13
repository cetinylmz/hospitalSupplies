import React from 'react'
import Footer from './Footer'
import Header from './Header'

function index(props) {
  return (
    <>
    <Header />
    {props.children}
    <Footer />
    </>
  )
}

export default index