import React from 'react'
import PropTypes from 'prop-types'

export default function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <main>{children}</main>
      {/* Form */}
      {/* Footer */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
