import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-3.jpg';
import { PayPalButtons } from '@paypal/react-paypal-js'

const Give = () => {
  return (
    <Layout heroImage={hero} pageTitle="Give">
      <div className="text-pink-500">Giving</div>
      <PayPalButtons style={{color: "blue", shape: "pill", labe: "pay", height: 40}}/>
    </Layout>
  )
}

export default Give