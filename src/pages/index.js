import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Hero from '../components/Hero'
import TwoCols from '../components/TwoCols'
import { StaticImage } from 'gatsby-plugin-image'

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
        <TwoCols left={<StoryLeftContent />} right={<StoryRightContent />} />
      </Container>
    </Layout>
  )
}

const StoryLeftContent = () => (
  <div className="space-y-5">
    <h2 className="uppercase text-2xl text-gray-600">Our Story</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora est
      earum veritatis libero quaerat, dolore dolores quae omnis, sint ipsam,
      rerum cumque et neque. Cumque et numquam excepturi aliquid.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi
      architecto laudantium quis officia fugiat voluptatem doloribus voluptates
      ducimus et velit cupiditate hic recusandae aliquam pariatur, aliquid
      accusantium illum ipsam.
    </p>
  </div>
)

const StoryRightContent = () => (
  <StaticImage
    className="rounded-lg"
    src="../images/sunrise.jpeg"
    width={340}
    layout="constrained"
    alt="sunrise"
  />
)
