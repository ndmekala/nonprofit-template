import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-4.jpg';

const Events = () => {
  return (
    <Layout heroImage={hero} pageTitle="Events">
        <div className="text-pink-600">Events</div>
    </Layout>
  )
}

export default Events