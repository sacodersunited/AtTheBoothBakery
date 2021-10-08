import React from 'react'
import CategoryGrid from '../components/CategoryGrid'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function desserts() {
  return (
    <Layout>
      <Seo
        title="At the Booth Bakery"
        description="At The Booth Bakery offers the best baked goods in San Antonio. Visit our
      website to get more information and order today!"
        keywords={[`Baked goods`, `cookies`, `cakes`, `bread`, `san antonio`]}
      />
      <Container>
        <div className="py-10">
          <h2 className="font-light uppercase text-3xl tracking-tighter text-gray-700">
            Dessert Collections
          </h2>
          <div className="flex items-center space-x-5 text-gray-50 mt-2">
            <Pill bgColor="bg-brand-yellow">Cookies</Pill>
            <Pill bgColor="bg-brand-pink">Cakes</Pill>
            <Pill bgColor="bg-brand-green">Bread</Pill>
          </div>
        </div>
      </Container>
      <CategoryGrid />
    </Layout>
  )
}

function Pill({ children, bgColor }) {
  return (
    <button className={`${bgColor} px-2 py-1 rounded-sm text-sm`}>
      {children}
    </button>
  )
}
