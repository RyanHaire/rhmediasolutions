import React, { Component } from 'react'
import GenericHeader from '../components/GenericHeader'
import Background from '../images/contact-banner.png'
import RHMediaForm from '../components/RHMediaForm'


export default class Contact extends Component {

  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render() {
    return(
      <div className="container">
        <GenericHeader
          bgImg={Background}/>
        <RHMediaForm/>
      </div>
    )
  }
}
