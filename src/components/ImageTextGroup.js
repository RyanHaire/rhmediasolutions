import React, { Component } from 'react'
import '../styles/styles.css'
import { Transition } from 'react-transition-group'
import '../styles/animation.css'

export default class ImageTextGroup extends Component {
  styles = {
    titleUnderlineStyle: {
      paddingTop: '.8rem',
      paddingBottom: '.5rem',
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      color: "#F28019",
      fontSize: 22
    },
    paragraphTitle: {
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontStyle: "italic",
      fontSize: 19,
      color: this.props.titleOrange
    },
    paragraphBody: {
      fontSize: 16,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300",
      paddingLeft: this.props.paraSidePadding,
      paddingRight: this.props.paraSidePadding,
    },
    img: {
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none",
      height: 190
    }
  }
  render() {
    const paragraphs = this.props.paragraphs.map((paragraph, id) => {
      return (<div className="mt-4" key={"para" + id}>
                <h4 style={this.styles.paragraphTitle}>{paragraph.title}</h4>
                <p className="text-left" style={this.styles.paragraphBody}>{paragraph.body}</p>
              </div>
          )
    })

    return(
          <div className="container mt-5">
            <div className="row d-lg-flex align-items-center">
              <div className="col-sm-12 col-lg-6 mt-3">
                <Transition in={true} timeout={400} appear>
                  {(state) => (
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} style={this.styles.img} className={`fade-${state}`}/>
                  )}
                </Transition>
              </div>
              <div className="col-sm-12 col-lg-6 mt-3 pl-4 pr-4">
                {this.props.underlineTitle && <h3 style={this.styles.titleUnderlineStyle} className="underline-title">{this.props.underlineTitle}</h3>}
               {paragraphs}
              </div>
            </div>
          </div>
    )
  }
}
