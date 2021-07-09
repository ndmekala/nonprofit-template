import * as React from "react";
import Layout from "../components/layout";
import Zion from "../images/hero/zion.webp";
import Section from "../components/section";

const IndexPage = () => {

  return (
    <Layout heroImage={Zion} pageTitle="Home">
      <Section title="Our Vision">
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
      </Section>
    </Layout>
  );
};

export default IndexPage;
