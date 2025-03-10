import React from 'react'

import { Helmet } from 'react-helmet'

import './kontakt.css'

const Kontakt = (props) => {
  return (
    <div className="kontakt-container1">
      <Helmet>
        <title>
          Kontakt - iCharge.app - Stacione dhe pika karikimi për makina
          elektrike.
        </title>
        <meta
          name="description"
          content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
        />
        <meta
          property="og:title"
          content="Kontakt - iCharge.app - Stacione dhe pika karikimi për makina elektrike."
        />
        <meta
          property="og:description"
          content="Zbuloni iCharge.app, platforma juaj për karikimin e makinave elektrike në Shqipëri. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d334a72c-d322-4e02-af2f-aa1a000a9ada/f77c7958-1225-4afe-a283-098a54e58587?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="kontakt-contact">
        <form
          action="https://formsubmit.co/office@icharge.app"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="kontakt-form"
        >
          <h1 className="kontakt-text">
            <span>{/*locale-text_yQg5He*/}</span>
          </h1>
          <div className="kontakt-container2">
            <div className="kontakt-input1">
              <input
                type="text"
                id="contact-form-6-first-name"
                name="first_name"
                placeholder="First Name"
                className="kontakt-text-input1 thq-input"
              />
            </div>
            <div className="kontakt-input2">
              <input
                type="text"
                id="contact-form-6-last-name"
                name="first_name"
                placeholder="Last Name"
                className="kontakt-text-input2 thq-input"
              />
            </div>
          </div>
          <div className="kontakt-container3">
            <div className="kontakt-input3">
              <input
                type="email"
                id="contact-form-6-email"
                name="email"
                required="true"
                placeholder="Email"
                className="kontakt-text-input3 thq-input"
              />
            </div>
            <div className="kontakt-input4">
              <input
                type="tel"
                id="contact-form-6-phone"
                name="phone_number"
                placeholder="Number"
                className="kontakt-text-input4 thq-input"
              />
            </div>
          </div>
          <textarea
            cols="80"
            name="message"
            rows="4"
            placeholder="Type a message"
            className="kontakt-textarea"
          ></textarea>
          <button type="submit" className="kontakt-button button">
            <span>{/*locale-text_I5aIse*/}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Kontakt
