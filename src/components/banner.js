import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div id={props.bannerId} className="banner-banner">
      <div className="banner-container">
        <div className="banner-left">
          <h2 className="banner-text1 title">
            {props.heading ?? (
              <Fragment>
                <span className="banner-text4">
                  <span>{/*locale-text_uMMcnV*/}</span>
                </span>
              </Fragment>
            )}
          </h2>
          <span className="banner-text2">
            {props.text ?? (
              <Fragment>
                <span className="banner-text3">
                  <span>{/*locale-text_CpW2MS*/}</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="banner-image-container">
          <img
            alt={props.cardsImageAlt}
            src={props.cardsImageSrc}
            className="banner-cards-image"
          />
        </div>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  bannerId: '',
  cardsImageSrc: '/karikues2-1200w.webp',
  text: undefined,
  heading: undefined,
  cardsImageAlt: 'pastedImage',
}

Banner.propTypes = {
  bannerId: PropTypes.string,
  cardsImageSrc: PropTypes.string,
  text: PropTypes.element,
  heading: PropTypes.element,
  cardsImageAlt: PropTypes.string,
}

export default Banner
