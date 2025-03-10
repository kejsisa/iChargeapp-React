import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './slide1.css'

const Slide1 = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide1-slide slide ${props.rootClassName} `}
    >
      <div className="slide1-max-wdith max-content-container">
        <h1 className="slide1-text1 Heading2">
          {props.heading1 ?? (
            <Fragment>
              <span className="slide1-text2">
                <span>{/*locale-text_M4tfgO*/}</span>
              </span>
            </Fragment>
          )}
        </h1>
      </div>
    </div>
  )
}

Slide1.defaultProps = {
  rootClassName: '',
  heading1: undefined,
}

Slide1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Slide1
