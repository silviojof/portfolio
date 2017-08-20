import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Form, Text, Textarea } from 'react-form'
import axios from 'axios'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }
  render() {
    const btnText = this.state.active ? 'Submit' : 'Thank You for your message';
    return (
      <Form
        onSubmit={
          (values) => {
            console.log('Success!', values);
            axios({
              method: 'post',
              url: 'https://formspree.io/silviojof@gmail.com',
              responseType: 'json',
              data: values
            })
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
          }
        }
        validate={
            values => {
            const { name, email, message } = values;
            return {
              name: !name ? '* A Name is required' : undefined,
              email: !email ? '* An e-mail address is required' : undefined,
              message: !message ? '* A message is required' : undefined
            }
          }
        }
        postSubmit={
          (values, state, props, instance) => {
            instance.resetForm();
            this.setState({ active: false });
            setTimeout(function(){
              this.setState({ active: true });
            }.bind(this), 5000);
          }
        }
      >
        {
          ({submitForm}) => {
            return (
              <form ref={(el) => this.myFormRef = el} id="main-form" className="main-form" onSubmit={submitForm}>
                <Text field='name' placeholder='Name...'/>
                <Text field='email' placeholder='E-mail...'/>
                <Textarea field='message' placeholder='Message...'/>
                <button id="submit-btn" className="btn" type='submit'>{btnText}</button>
              </form>
            )
          }
        }
      </Form>
    );
  }
}
