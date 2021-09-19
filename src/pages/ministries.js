import * as React from "react"
import Layout from '../components/layout'
import hero from '../images/hero/stock-3.jpg';
import Section from "../components/section";
import Ministry from "../components/ministry";

const Ministries = () => {

    const ministryInfo = [
        {
            title: 'Prayer Ministry',
            description: 'If you are in need of prayer, Zion has a team of praying saints who will intercede on your behalf. PRAYER NIGHT is on the FIRST AND THIRD THURSDAY of each month at 5:30pm. You are encouraged to come out and pray with/ for others from Zion and for the community.',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_af582bf96a3a462a9fd9b57a4ca2fa14~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/praying-hands-background-1.webp',
        },
        {
            title: 'Youth Ministry',
            description: 'At Zion, we strive to see youth of every age discover who they are in Jesus Christ and become the world- changers they were created to be',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_442087710b7c43e3a3e3a4060bf2625a~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/Youth%20Ministry.webp',
        },
        {
            title: 'Young Adults/ Singles',
            description: 'In our ministry we engage in: community outreach, group fun, fellowship, and spiritual growth innovative church activities. If you consider yourself a young adult/single person, please join us as we walk out our faith journeys together in Jesus name!',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        },
        {
            title: 'Missions Ministry',
            description: 'The purpose of the Mission  Ministry is to reach those who are outside the walls of our Church with the message and the love of Jesus Christ. We do this by ministering to all we meet, ',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        },
        {
            title: 'Women’s Ministry',
            description: 'To encounter Jesus love in an intimate way, to be strengthen in faith through nurture in God’s word, to become Disciples of Christ and to fellowship with one another in love',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        },
        {
            title: 'Men’s Ministry',
            description: 'Bringing Together Men Of All Ages To Grow In Relationship With Jesus Christ; Encouraging Each Other To Be Servant Leaders In Our Families, Church and Communities.',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        },
        {
            title: 'Deacon’s Ministry',
            description: 'Deacon’s Ministry',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        },
        {
            title: 'Senior’s Ministry',
            description: 'Senior’s Ministry',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        },
        {
            title: 'Usher Ministry',
            description: 'The Usher Ministry serves as the church doorkeepers to ensure that worshipers feel welcome.',
            imgSrc: 'https://static.wixstatic.com/media/5ead33_3d02f7255b624fb1a23dfeb6ab9bb416~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/YAS_edited.webp',
        }
    ];
    const twh1 = "font-serif font-bold text-4xl mt-6";
  return (
    <Layout heroImage={hero} pageTitle="Ministries">
        <h1 className={twh1}>Ministries</h1>
        {ministryInfo.map((row, index) => (
            <Ministry imgSrc={row.imgSrc} alt={row.title + " image"} title={row.title}>
            {row.description}
            </Ministry>
        ))}
        {/* ministryInfo.map((row) => (       
            <Section title={row.title}>
                <p>{row.description}</p>
            </Section>
        )) */}
        <h1 className="text-7xl">EVENTS</h1>
        <h1 className="text-7xl">CALENDAR</h1>
    </Layout>
  )
}

export default Ministries