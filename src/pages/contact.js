import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-5.jpg';

const Contact = () => {

    const twp = "text-2xl font-light mt-2 leading-snug"
    
  return (
    <Layout heroImage={hero} pageTitle="Contact">
        <p>621 Elwood Ave N</p>
        <p>Minneapolis, MN 55411</p>
        <p>612-377-5436</p>
        <p className="text-5xl">CONTACT FORM NETLIFY!</p>
        <p className={twp}><em>Inquiries regarding CD purchases can be made through this form.</em></p>
    </Layout>
  )
}

export default Contact