import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-2.jpg';
import Section from "../components/section"

const Ministries = () => {

    const ministryInfo = [
        {
            title: 'Prayer Ministry',
            description: 'If you are in need of prayer, Zion has a team of praying saints who will intercede on your behalf. PRAYER NIGHT is on the FIRST AND THIRD THURSDAY of each month at 5:30pm. You are encouraged to come out and pray with/ for others from Zion and for the community.'
        },
        {
            title: 'Youth Ministry',
            description: 'At Zion, we strive to see youth of every age discover who they are in Jesus Christ and become the world- changers they were created to be',
        },
        {
            title: 'Young Adults/ Singles',
            description: 'In our ministry we engage in: community outreach, group fun, fellowship, and spiritual growth innovative church activities. If you consider yourself a young adult/single person, please join us as we walk out our faith journeys together in Jesus name!'
        },
        {
            title: 'Missions Ministry',
            description: 'The purpose of the Mission  Ministry is to reach those who are outside the walls of our Church with the message and the love of Jesus Christ. We do this by ministering to all we meet, ',
        },
        {
            title: 'Women’s Ministry',
            description: 'To encounter Jesus love in an intimate way, to be strengthen in faith through nurture in God’s word, to become Disciples of Christ and to fellowship with one another in love',
        },
        {
            title: 'Men’s Ministry',
            description: 'Bringing Together Men Of All Ages To Grow In Relationship With Jesus Christ; Encouraging Each Other To Be Servant Leaders In Our Families, Church and Communities.',
        },
        {
            title: 'Deacon’s Ministry',
            description: 'Deacon’s Ministry'
        },
        {
            title: 'Senior’s Ministry',
            description: 'Senior’s Ministry',
        },
        {
            title: 'Usher Ministry',
            description: 'The Usher Ministry serves as the church doorkeepers to ensure that worshipers feel welcome.',
        }
    ]
  return (
    <Layout heroImage={hero} pageTitle="Ministries">
        {ministryInfo.map((row) => (
            <Section title={row.title}>
                <p>{row.description}</p>
            </Section>
        ))}
    </Layout>
  )
}

export default Ministries