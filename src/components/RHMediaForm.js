import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import RHMediaModal from './RHMediaModal'

export default class RHMediaForm extends React.Component {
  styles = {
    textAreaStyle: {
      height: 200,
      resize: 'none',
      overflowY: 'auto'
    }
  }

  state = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNum: '',
    comments: '',
    packageSelect: '',
    formSubmit: false,
    formSuccess: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggle = () => {
    this.setState({
      formSubmit: !this.state.formSubmit
    })
  }

  submitHandler = (e) => {
    e.preventDefault()

    this.setState({
      formSubmit: true
    })
    // Send a POST request
    const url = 'https://rhmediasolutions.com/formhandler.php';
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.company,
      email: this.state.email,
      phoneNum: this.state.phoneNum,
      comments: this.state.comments,
      packageSelect: this.state.packageSelect
    }
    console.log(data)

    const request = new Request(
      url,
      {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    fetch(request)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            formSuccess: true
          })
          return response.json()
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      });

    this.setState({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phoneNum: '',
      comments: '',

    })
  }

  render() {
    return (
      <React.Fragment>
        <Form className="ml-4 mr-4 col-lg-8 mx-auto" onSubmit={this.submitHandler}>
          <FormGroup>
            <Input type="text" name="firstName" onChange={e => this.handleChange(e)} value={this.state.firstName} placeholder="First Name" required/>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="lastName" onChange={e => this.handleChange(e)} value={this.state.lastName} placeholder="Last Name" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="company" onChange={e => this.handleChange(e)} value={this.state.company} placeholder="Company"/>
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" onChange={e => this.handleChange(e)} value={this.state.email} placeholder="Email" required/>
          </FormGroup>
          <FormGroup>
            <Input type="tel" name="phoneNum" onChange={e => this.handleChange(e)} value={this.state.phoneNum} placeholder="Phone Number" />
          </FormGroup>
          <FormGroup>
          <Input type="select" name="packageSelect" onChange={e => this.handleChange(e)} value={this.state.packageSelect} placeholder="What package do you want?">
            <option>No Package, only contacting</option>
            <option>Basic Website Package</option>
            <option>Intermediate Website Package</option>
            <option>Elite Website Package</option>
            <option>Professional Website Package</option>
          </Input>
        </FormGroup>
          <FormGroup>
            <Input style={this.styles.textAreaStyle} onChange={e => this.handleChange(e)} value={this.state.comments} type="textarea" name="comments" placeholder="Comments" />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
        {this.state.formSubmit && <RHMediaModal isOpen={this.state.formSubmit} toggle={this.toggle} formSuccess={this.state.formSuccess}/>}
      </React.Fragment>
    )
  }
}
