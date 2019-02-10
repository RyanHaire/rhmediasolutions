import React, { Component } from 'react'
import HomeHeader from '../components/HomeHeader'
import ImageTextGroup from '../components/ImageTextGroup'
import TeamGroup from '../components/TeamGroup'
import CustomerReviewGroup from '../components/CustomerReviewGroup'
import Lightbulb from '../images/lightbulb_graphic.png'
import Computer from '../images/computer_graphic.png'
import Speedometer from '../images/speed_graphic.png'
import Camera from '../images/camera_graphic.png'

export default class Home extends Component {
  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render() {
    return(
      <div>
        <HomeHeader/>
        <ImageTextGroup
          imgSrc={Lightbulb}
          imgAlt="graphic"
          titleOrange="#F28019"
          paragraphs={[
            {
              title: "Our job is to make your dream a reality.",
              body: "Here at RH Media Solutions, we provide you with the media solutions to help you and your busines achieve your endeavours. Our website design and development solutions are of utmost innovation bringing you a unique look to your brand."
            }
          ]}
        />
        <ImageTextGroup
          imgSrc={Computer}
          imgAlt="graphic"
          underlineTitle="Web Services"
          paragraphs={[
            {
              title: "Web Design",
              body: "Our web design solutions are thorough. We research your brand and your competitors to plan accordingly so you look the best. With our web design services you surely will be impressed."
            },
            {
              title: "Web Development",
              body: "Our development solutions contain modern technology of the web. Do you want to manage your own content? Then we can provide you with a wordpress template so you can use the built in Content Management System(CMS). Or, do you want to have the fastest website on the web? We can build a custom ReactJS single page web application."
            },
            {
              title: "Graphic Design",
              body: "Logo Design, Social Media Banners, Social Media Ad Design, you name it we do it! Our graphics are high caliber and will boost your business brand to the next level."
            }
          ]}
        />
        <ImageTextGroup
          imgSrc={Speedometer}
          imgAlt="graphic"
          underlineTitle="Website Features"
          paragraphs={[
            {
              title: "Speed",
              body: "Every website we develop are of top notch speed so users will be pleased. Users expect pages to load in two seconds, and after three seconds, up to 40% of users will abandon your site."
            },
            {
              title: "Cross Browser",
              body: "Developed for every possible browser available so we help you get traffic from every corner of the web. Every little bit counts!"
            },
            {
              title: "SEO Friendly",
              body: "Search Engine Optimized pages so your page will be loved by every search engine bot. This will help your page reach to the top pages of Google, Bing, Yahoo etc."
            },
            {
              title: "Responsive Design",
              body: "Built with the desktop, laptop, tablet and phone in mind. Your page will work on every device to go beyond your potential user traffic."
            }
          ]}
        />
        <ImageTextGroup
          imgSrc={Camera}
          imgAlt="graphic"
          underlineTitle="Media"
          paragraphs={[
            {
              title: "Web Templates",
              body: "We design and build Wordpress templates for tech savvy people or someone with a small budget. This will get you going right away. "
            },
            {
              title: "Icon Packages",
              body: "Web friendly icons designed by our graphic designer. Once you purchase you own them. We can implement them into your website for you for additional price."
            },
            {
              title: "Stock Photography",
              body: "Web friendly photos for you to purchase and to use on your websites. Visuals are a top factor in user engagement."
            }
          ]}
        />
        <TeamGroup/>
        <CustomerReviewGroup/>
      </div>
    )
  }
}
