import React from 'react'

export default function ProductCard() {
  return (
    <div className="flex-grow relative">
      <img
        src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2llfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="cookie"
        width="100%"
        className=""
      />
      <div className="absolute bg-gray-50 text-gray-600 bottom-0 md:bottom-5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-brand-pink uppercase font-bold">
            Giant Cookie Crumble
          </h3>
          <p>$13</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est
          explicabo fugit, at quasi omnis asperiores porro blanditiis. Quasi,
          adipisci. Ipsam totam deserunt quasi, a animi placeat eum reiciendis
          ducimus!
        </p>
      </div>
    </div>
  )
}
