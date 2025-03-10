import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  return (
    <div className="service-card-container1">
      <div className="service-card-container2">
        <svg viewBox="0 0 1024 1024" className="service-card-icon1">
          <path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
        </svg>
      </div>
      <h1 className="service-card-text1 TextXL">
        {props.heading1 ?? (
          <Fragment>
            <span className="service-card-text4">
              <span>{/*locale-text_uJkh7n*/}</span>
            </span>
          </Fragment>
        )}
      </h1>
      <span className="service-card-text2">
        {props.text1 ?? (
          <Fragment>
            <span className="service-card-text3">
              <span>{/*locale-text_XiVOX_*/}</span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

ServiceCard.defaultProps = {
  text1: undefined,
  heading1: undefined,
}

ServiceCard.propTypes = {
  text1: PropTypes.element,
  heading1: PropTypes.element,
}

export default ServiceCard
