import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Hero from '../components/Hero'

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="At the Booth Bakery"
        description="At The Booth Bakery offers the best baked goods in San Antonio. Visit our
      website to get more information and order today!"
        keywords={[`Baked goods`, `cookies`, `cakes`, `bread`, `san antonio`]}
      />
      <Container>
        <Hero />
      </Container>
    </Layout>
  )
}
