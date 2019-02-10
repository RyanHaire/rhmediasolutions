import React, { Component } from 'react'
import GenericHeader from '../components/GenericHeader'
import ImageTextGroup from '../components/ImageTextGroup'
import TextGroup from '../components/TextGroup'
import ServicePackage from '../components/ServicePackage'
import Banner from '../images/services-banner.png'
import Computer from '../images/computer_graphic.png'
import Wrench from '../images/services-wrench.png'
import Hammer from '../images/services-hammer.png'
import Saw from '../images/services-saw.png'
import Drill from '../images/services-drill.png'

export default class Services extends Component {
  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render() {
    return(
      <div className="container">
        <GenericHeader
          bgImg={Banner}/>
          <ImageTextGroup
            imgSrc={Computer}
            imgHeight="250px"
            imgAlt="graphic"
            titleOrange="#F28019"
            paraSidePadding="1.5rem"
            paragraphs={[
              {
                title: "web Design and Development",
                body: "Our packages provide you with a solution for your website design and development needs. If something that you need isn't provided, let us know and we will help you out."
              },
              {
                title: "website feature integration",
                body: "Additional features outside of our packages content are available like plugin installment for wordpress. Chat integration for customer service. Let us know what you are looking for and we will help you out. "
              }
            ]}
          />
          <div className="row">
            <ServicePackage
              imgSrc={Hammer}
              imgAlt="basic package graphic"
              packTitle="BASIC WEB PACKAGE"
              packFeatures={[
                "Up to 2 pages",
                "* $75 per extra page",
                "Social Media Integration",
                "Contact Form",
                "Mobile Responsive",
                "On Page SEO Integrated"
              ]}
              packPrice="$499"
              buttonActive={true}
            />
            <ServicePackage
              imgSrc={Wrench}
              imgAlt="basic package graphic"
              packTitle="INTERMEDIATE WEB PACKAGE"
              packFeatures={[
                "Up to 4 pages",
                "* $75 per extra page",
                "Social Media Integration",
                "Contact Form",
                "Mobile Responsive",
                "On Page SEO Integrated",
                "Google Analytics Integration"
              ]}
              packPrice="$699"
              buttonActive={true}
            />
            <ServicePackage
              imgSrc={Saw}
              imgAlt="basic package graphic"
              packTitle="ELITE WEB PACKAGE"
              packFeatures={[
                "Up to 5 pages",
                "Social Media Integration",
                "* $100 per extra page",
                "Contact Form",
                "Mobile Responsive",
                "On Page SEO Integrated",
                "Google Analytics Integration"
              ]}
              packPrice="$899"
              buttonActive={true}
            />
            <ServicePackage
              imgSrc={Drill}
              imgAlt="basic package graphic"
              packTitle="PROFESSIONAL WEB PACKAGE"
              packFeatures={[
                "Up to 7 pages",
                "* $100 per extra page",
                "Social Media Integration",
                "Blog Integration",
                "Contact Form",
                "Newsletter Sign Up",
                "Logo Design",
                "Mobile Responsive",
                "On Page SEO Integrated",
                "Google Analytics Integration"
              ]}
              packPrice="$1399"
              buttonActive={true}
            />
            <TextGroup
              title="additional services"
              services={[
                "Wordpress Setup",
                "Wordpress Plugin Setup",
                "Domain Setup",
                "Hosting Setup",
                "Logo Design",
                "SEO",
                "Facebook Ads Setup - includes Instagram",
                "Facebook Ads Design",
                "Google Ads Setup includes Youtube ",
                "Google Ads Design"
              ]} />
          </div>
      </div>
    )
  }
}
