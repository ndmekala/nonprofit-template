import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-1.jpg';
import Section from '../components/section'

const About = () => {
  return (
    <Layout heroImage={hero} pageTitle="About">
      <div className="text-pink-500">About!</div>
      <Section title="Hello">
          hi
      </Section>
    </Layout>
  )
}

export default About