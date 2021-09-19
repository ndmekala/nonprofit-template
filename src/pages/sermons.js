import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-5.jpg';

const Sermons = () => {

  const twh1 = "font-serif font-bold text-4xl mt-6";
  const twp = "text-2xl font-light mt-2 leading-snug";
  const twa = "text-cadet hover:underline";
  
    return (
        <Layout heroImage={hero} pageTitle="Sermons">
            <h1 className={twh1}>Watch</h1>
            <p className={twp}>You can view our sermons on <a href="https://www.facebook.com/621elwood/" className={twa}>Facebook Live</a>. <em>Services are Sundays at 11 am.</em></p>
            <h1 className={twh1}>Listen</h1>
            <p className={twp}>You can also listen to our sermons on 89.9 FM <a href="" className={twa}>KMOJ</a>. <em>Sermons air Sundays at 9 am.</em></p>
        </Layout>
    )
}

export default Sermons