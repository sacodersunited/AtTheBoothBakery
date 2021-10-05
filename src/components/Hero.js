import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Hero() {
  return (
    <div class="grid grid-cols-2 py-10 sm:max-w-screen-md sm:mx-auto">
      <div className="flex items-center">
        <div className="pl-5 border-l-4 space-y-5 border-brand-darkPurple text-4xl text-gray-600">
          <p>Welcome to our bakery</p>
          <p>All desserts are made fresh to order</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <StaticImage
          src="../images/baker.jpeg"
          width={249}
          layout="fixed"
          className="rounded-full"
          quality={90}
        />
        <p className="uppercase mt-2 text-gray-500">
          Jan Smith | <span className="italic normal-case">Chief Baker</span>
        </p>
      </div>
    </div>
  )
}
