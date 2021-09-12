import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-1.jpg';
import Section from '../components/section'

const About = () => {
  return (
    <Layout heroImage={hero} pageTitle="About">
      <div className="">About!</div>
      <Section title="Hello">
          hi
      </Section>
      <h1 className="text-7xl">MINISTERS</h1>
    </Layout>
  )
}

export default About