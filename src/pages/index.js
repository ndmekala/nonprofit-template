import * as React from "react";
import Layout from "../components/layout";
import hero from "../images/hero/stock-3.jpg";
import Section from "../components/section";
import Blurb from "../components/blurb"

const IndexPage = () => {
  // this has got to be temporary…
  const twh1 = "font-serif font-bold text-4xl mt-6"
  const twp = "text-2xl font-light mt-2 leading-snug"

  return (
    <Layout heroImage={hero} pageTitle="Home">
        {/* Some of the text edited. */}
      <h1 className={twh1}>Our Vision</h1>
      <p className={twp}>Zion Baptist Church is a Spirit-led, transformed body of believers whose sole vision is to glorify God in all we do, centered in love, peace, and grace. Healing, evangelizing, making disciples, thus creating a Christ-centered community—the Beloved Community (Acts 2:42-47).</p>
      <h1 className={twh1}>Our Mission</h1>
      <p className={twp}>Zion Baptist Church exists to be a center of Christ-like love and healing, to introduce people to Jesus Christ, helping them mature in faith and grow in service, equipping them to go to the world to spread the good news, making disciples of Jesus.</p>
      <h1 className={twh1}>Services</h1>
      <p className={twp}>Our Sunday service time is 11 am, with Sunday school beginning at 10 am.</p>
      <Blurb title="yes" imgSrc="https://media.istockphoto.com/vectors/defocused-abstract-blue-and-green-background-vector-id1044292966?k=20&m=1044292966&s=612x612&w=0&h=-GYgsBeO-EZ9PT2jr5RMgd3IWnYsK_R53o21SssGEq0=">Hi</Blurb>
      {/* <Section title="Our Vision">
          <p>Zion Baptist Church is a Spirit led, transformed body of believers
          whose sole vision is to Glorify GOD in all we do... centered in
          love, peace, and grace; healing, evangelizing, making disciples thus
          creating a Christ -centered community" ACTS 2;42-47 ("The Beloved
          Community")</p>
      </Section>
      <Section title="Our Mission">
          <p>Zion Baptist Church exists to be a center of Christ-like love and
            healing, to introduce people to Jesus Christ, helping them mature in
            faith and grow in service, equipping them to go to the world to
            spread the good news, making Disciples of Jesus.</p>
      </Section> */}
    </Layout>
  );
};

export default IndexPage;
