import * as React from "react";
import Layout from "../components/layout";
import hero from "../images/hero/stock-3.jpg";
import HomeSection from "../components/homepagesection"

const IndexPage = () => {
  // like these fonts better or whats in the comp?
  // const twh1 = "font-serif font-bold text-4xl mt-6"
  // const twp = "text-2xl font-light mt-2 leading-snug"

  {/* Some of the text edited. */}
  // schema: 1) title, 2) imgSrc, 3) children…, 4) (order)
  const homeData = [
    {
      title: 'Our Vision',
      description: 'Zion Baptist Church is a Spirit-led, transformed body of believers whose sole vision is to glorify God in all we do, centered in love, peace, and grace. Healing, evangelizing, making disciples, thus creating a Christ-centered community—the Beloved Community (Acts 2:42-47).',
      imgSrc: 'https://media.istockphoto.com/vectors/defocused-abstract-blue-and-green-background-vector-id1044292966?k=20&m=1044292966&s=612x612&w=0&h=-GYgsBeO-EZ9PT2jr5RMgd3IWnYsK_R53o21SssGEq0='
    },
    {
      title: 'Our Mission',
      description: 'Zion Baptist Church exists to be a center of Christ-like love and healing, to introduce people to Jesus Christ, helping them mature in faith and grow in service, equipping them to go to the world to spread the good news, making disciples of Jesus.',
      imgSrc: 'https://media.istockphoto.com/vectors/defocused-abstract-blue-and-green-background-vector-id1044292966?k=20&m=1044292966&s=612x612&w=0&h=-GYgsBeO-EZ9PT2jr5RMgd3IWnYsK_R53o21SssGEq0='
    },
    {
      title: 'Services',
      description: 'Our Sunday service time is 11 am, with Sunday school beginning at 10 am.',
      imgSrc: 'https://media.istockphoto.com/vectors/defocused-abstract-blue-and-green-background-vector-id1044292966?k=20&m=1044292966&s=612x612&w=0&h=-GYgsBeO-EZ9PT2jr5RMgd3IWnYsK_R53o21SssGEq0='
    },
  ]

  return (
    <Layout wide="1" heroImage={hero} pageTitle="Home">
      {homeData.map((row, index) => (
          <HomeSection imgSrc={row.imgSrc} title={row.title} orderIterator={index}>
          {row.description}
          </HomeSection>
      ))}
    </Layout>
  );
};

export default IndexPage;
