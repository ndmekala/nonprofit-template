import * as React from "react"
import Layout from '../components/layout'
import Zion2 from '../images/hero/zion2.webp';
import Section from '../components/section'

const About = () => {
  return (
    <Layout heroImage={Zion2} pageTitle="About">
      <div className="text-pink-500">About!</div>
      <Section title="Hello">
          hi
      </Section>
    </Layout>
  )
}

export default About