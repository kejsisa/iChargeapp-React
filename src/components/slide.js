import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-wdith max-content-container">
        <h1 className="slide-text1 Heading2">
          {props.heading1 ?? (
            <Fragment>
              <span className="slide-text2">
                <span>{/*locale-text_DULz4s*/}</span>
              </span>
            </Fragment>
          )}
        </h1>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  rootClassName: '',
  heading1: undefined,
}

Slide.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Slide
