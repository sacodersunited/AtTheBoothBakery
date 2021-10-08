import React from 'react'
import PropTypes from 'prop-types'

export default function Container({ children }) {
  return (
    <div className="container mx-auto px-6 sm:p-0 sm:max-w-screen-lg sm:mx-auto">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
