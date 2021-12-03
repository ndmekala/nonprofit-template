import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-1.jpg';
import Section from '../components/section';
import Minister from "../components/minsiter";
import Ministers from "../components/ministers";

const About = () => {
    const twh1 = "font-serif font-bold text-4xl mt-6";

    const ministerInfo = [
      {
          title: 'Head Pastor Brian Herron',
          imgSrc: 'https://static.wixstatic.com/media/5ead33_8ef648bd026f487c8d35ecd2abf2f72c~mv2.jpg/v1/crop/x_0,y_120,w_721,h_721/fill/w_309,h_309,al_c,q_80,usm_0.66_1.00_0.01/pastor%202.webp',
      },
      {
          title: 'First Lady Minister Rhonda Bell Herron',
          imgSrc: 'https://static.wixstatic.com/media/5ead33_42328865327d4107800b387a21dd1f51~mv2.jpg/v1/fill/w_309,h_309,al_c,q_80,usm_0.66_1.00_0.01/miniiiiister%20rhonda_edited_edited.webp',
      },
  ];

  return (
    <Layout heroImage={hero} pageTitle="About">
      <h1 className={twh1}>Ministers</h1>
      <Ministers>
        {ministerInfo.map((card) => (
          <Minister imgSrc={card.imgSrc} title={card.title} />
        ))}
      </Ministers>
      <h1 className={twh1}>Location</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.964075604922!2d-93.30106070000001!3d44.9850409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332fddfe4db0d%3A0xb811b02981c27c7d!2s621%20Elwood%20Ave%20N%2C%20Minneapolis%2C%20MN%2055411!5e0!3m2!1sen!2sus!4v1632013973996!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </Layout>
  )
}

export default About