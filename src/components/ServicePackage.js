import React, { Component } from 'react'

export default class ServicePackage extends Component {
  styles = {
    packImg: {
      display: "block",
      margin: "0 auto",
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none",
      height: "280px"
    },
    packTitle: {
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontSize: 21,
      color: "#F28019"
    },
    packFeat: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300",
      fontSize: 16
    },
    packPrice: {
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontSize: 28,
      color: "#F28019"
    }
  }

  render() {
    const packFeatures = this.props.packFeatures.map((item) => {
        return <p style={this.styles.packFeat} className="mt-2 mb-2">{item}</p>
    })
    return(
      <div className="container mt-5 col-sm-12 col-lg-6">
        <img style={this.styles.packImg} src={this.props.imgSrc} alt={this.props.imgAlt}/>
        <h3 className="mt-2" style={this.styles.packTitle}>{this.props.packTitle}</h3>
        {packFeatures}
        <p style={this.styles.packPrice}>{this.props.packPrice}</p>
        { this.props.buttonActive &&
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="TVS2RLCFFCFVW"/>
            <input type="image" src="https://rhmediasolutions.com/paypal-button-small.png" height="30" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        }
      </div>
    )
  }
}
