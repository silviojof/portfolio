import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Form, Text, Textarea } from 'react-form'

export default class ContactForm extends Component {
  render() {
    return (
      // <div>Contact Form</div>
      <Form
        onSubmit={
          (values) => {
            console.log('Success!', values)
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
                <button className="btn" type='submit'>Submit</button>
              </form>
            )
          }
        }
      </Form>
    );
  }
}
