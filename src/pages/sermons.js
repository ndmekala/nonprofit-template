import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-5.jpg';

const Sermons = () => {
    return (
        <Layout heroImage={hero} pageTitle="Sermons">
            <h1 className="text-7xl">WATCH</h1>
            <h1 className="text-7xl">LISTEN</h1>
        </Layout>
    )
}

export default Sermons