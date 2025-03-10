import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './offer.css'

const Offer = (props) => {
  return (
    <div className="offer-offer">
      <img alt="image" src={props.image} className="offer-image" />
      <div className="offer-content">
        <div className="offer-details">
          <span className="offer-text1">
            {props.location1 ?? (
              <Fragment>
                <span className="offer-text6">
                  <span>{/*locale-text_3WinzM*/}</span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="offer-text2">
            {props.guides1 ?? (
              <Fragment>
                <span className="offer-text5">
                  <span>{/*locale-text_tzRcWr*/}</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <span className="offer-text3">
          {props.description1 ?? (
            <Fragment>
              <span className="offer-text4">
                <span>{/*locale-text_aq-KNW*/}</span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  description1: undefined,
  guides1: undefined,
  location1: undefined,
  image: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Offer.propTypes = {
  description1: PropTypes.element,
  guides1: PropTypes.element,
  location1: PropTypes.element,
  image: PropTypes.string,
}

export default Offer
