import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Hero() {
  return (
    <div className="grid grid-cols-2 py-10 sm:max-w-screen-md sm:mx-auto">
      <div className="flex items-center">
        <div className="pl-5 border-l-4 space-y-2 border-brand-darkPurple text-4xl text-gray-600 font-thin">
          <h2>Welcome to our bakery</h2>
          <p>All desserts are made fresh to order</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <StaticImage
          src="../images/baker.jpeg"
          width={200}
          layout="fixed"
          className="rounded-full"
          quality={90}
          alt="baker"
        />
        <p className="uppercase mt-2 text-gray-500">
          Jan Smith | <span className="italic normal-case">Chief Baker</span>
        </p>
      </div>
    </div>
  )
}
