import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Form />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
