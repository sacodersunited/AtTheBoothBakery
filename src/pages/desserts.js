import React from 'react'
import CategoryGrid from '../components/CategoryGrid'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import UseCookiesYaml from '../hooks/use-cookies-yaml'
import UseCakesYaml from '../hooks/use-cakes-yaml'
import UseBreadsYaml from '../hooks/use-breads-yaml'

export default function desserts() {
  const cookies = UseCookiesYaml()
  const cakes = UseCakesYaml()
  const breads = UseBreadsYaml()

  return (
    <Layout>
      <Seo
        title="Dessert Collections"
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
      <CategoryGrid
        category="Cookies"
        bgColor="bg-brand-yellow"
        products={cookies}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quam
        ipsum corporis dolor perspiciatis necessitatibus, ex perferendis sint
        aliquid natus fugiat nulla laborum ipsa dolorem eum cumque inventore,
        ratione iure.
      </CategoryGrid>
      <CategoryGrid category="Cakes" bgColor="bg-brand-pink" products={cakes}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quam
        ipsum corporis dolor perspiciatis necessitatibus, ex perferendis sint
        aliquid natus fugiat nulla laborum ipsa dolorem eum cumque inventore,
        ratione iure.
      </CategoryGrid>
      <CategoryGrid
        category="Breads"
        bgColor="bg-brand-green"
        products={breads}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quam
        ipsum corporis dolor perspiciatis necessitatibus, ex perferendis sint
        aliquid natus fugiat nulla laborum ipsa dolorem eum cumque inventore,
        ratione iure.
      </CategoryGrid>
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
