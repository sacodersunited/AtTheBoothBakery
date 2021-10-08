import React from 'react'

export default function TwoCols({ left, right }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 py-10 sm:max-w-screen-lg sm:mx-auto">
      <div className="flex items-stretch mr-1">{left}</div>
      <div className="flex flex-col items-stretch mt-4 md:mt-0">{right}</div>
    </div>
  )
}
