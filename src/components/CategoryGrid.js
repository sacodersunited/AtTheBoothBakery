import Container from './Container'
import React from 'react'
import ProductCard from './ProductCard'

export default function CategoryGrid({ category, bgColor, children }) {
  return (
    <section className={`pt-10 pb-10 md:pb-20 ${bgColor} text-gray-100`}>
      <Container>
        <div className="md:w-1/2">
          <h2 className="uppercase text-2xl">{category}</h2>
          <p className="mt-2 mb-4">{children}</p>
        </div>
      </Container>
      <div className="grid grid-col-1 md:grid-cols-3 md:gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}
