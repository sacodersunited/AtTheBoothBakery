import React from 'react'

import TwoCols from './TwoCols'

export default function Form() {
  return (
    <div>
      <div className="bg-gray-200">
        <TwoCols left={<FormLeftContent />} right={<FormRightContent />} />
      </div>
    </div>
  )
}

const FormLeftContent = () => (
  <div className="space-y-5">
    <h2 className="uppercase text-2xl">Contact Us</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora est
      earum veritatis libero quaerat, dolore dolores quae omnis, sint ipsam,
      rerum cumque et neque. Cumque et numquam excepturi aliquid.
    </p>
  </div>
)

const FormRightContent = () => (
  <div className="space-y-5">
    <h2 className="uppercase text-2xl">Form Goes Here</h2>
  </div>
)
