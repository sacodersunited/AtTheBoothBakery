import Container from './Container'
import React from 'react'

export default function CategoryGrid() {
  return (
    <section className="py-10 bg-brand-yellow text-gray-100">
      <Container>
        <div className="md:w-1/2">
          <h2 className="uppercase text-2xl">Cookies</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quam
            ipsum corporis dolor perspiciatis necessitatibus, ex perferendis
            sint aliquid natus fugiat nulla laborum ipsa dolorem eum cumque
            inventore, ratione iure.
          </p>
        </div>
        <p>Products go here</p>
      </Container>
    </section>
  )
}
