import React, { Component } from 'react'
import GenericHeader from '../components/GenericHeader'
import Background from '../images/shop-banner.png'
import ServicePackage from '../components/ServicePackage'
import Basic from '../images/shop-basic.png'
import Intermediate from '../images/shop-intermediate.png'
import Elite from '../images/shop-elite.png'
import Professional from '../images/shop-professional.png'
import Camera1 from '../images/shop-camera-1.png'
import Camera2 from '../images/shop-camera-2.png'

export default class Shop extends Component {
  styles = {
    heading: {
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontSize: 30
    }
  }

  componentDidMount() {
       window.scrollTo(0, 0);
   }

   render() {
    return(
      <div className="container">
        <GenericHeader
          bgImg={Background}/>
        <div className="row">
        <h2 style={this.styles.heading} className=" col-lg-12 mt-5">Web templates</h2>
          <ServicePackage
            imgSrc={Basic}
            imgAlt="basic package graphic"
            packTitle="BASIC WEB TEMPLATE"
            packFeatures={[
              "",

            ]}
            packPrice="Coming soon!"
            buttonActive={false}
          />
            <ServicePackage
              imgSrc={Intermediate}
              imgAlt="basic package graphic"
              packTitle="INTERMEDIATE WEB TEMPLATE"
              packFeatures={[
                "",

              ]}
              packPrice="Coming soon!"
              buttonActive={false}
            />
        </div>
        <div className="row">
          <h2 style={this.styles.heading} className="mt-5 col-lg-12">icon packages</h2>
          <ServicePackage
            imgSrc={Elite}
            imgAlt="basic package graphic"
            packTitle="elite package"
            packFeatures={[
              "",

            ]}
            packPrice="Coming soon!"
            buttonActive={false}
          />
          <ServicePackage
            imgSrc={Professional}
            imgAlt="basic package graphic"
            packTitle="professional package"
            packFeatures={[
              "",

            ]}
            packPrice="Coming soon!"
            buttonActive={false}
            />
        </div>
        <div className="row">
          <h2 style={this.styles.heading} className="mt-5 col-lg-12">stock photography</h2>
          <ServicePackage
            imgSrc={Camera1}
            imgAlt="basic package graphic"
            packTitle="BASIC photo PACK"
            packFeatures={[
              "",

            ]}
            packPrice="Coming soon!"
            buttonActive={false}
          />
          <ServicePackage
            imgSrc={Camera2}
            imgAlt="basic package graphic"
            packTitle="INTERMEDIATE photo Pack"
            packFeatures={[
              "",

            ]}
            packPrice="Coming soon!"
            buttonActive={false}
          />
        </div>
      </div>
    )
  }
}
