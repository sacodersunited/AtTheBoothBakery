import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function ProductCard(product) {
  return (
    <div className="relative">
      <GatsbyImage
        image={product.image}
        alt={product.title}
        className="w-full rounded-2xl"
      />
      <div className="w-11/12 md:w-full  absolute bg-gray-50 text-gray-600 bottom-0 md:bottom-5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-brand-pink uppercase font-bold">
            {product.title}
          </h3>
          <p>${product.price}</p>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
