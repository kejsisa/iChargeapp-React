import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './numbers-card1.css'

const NumbersCard1 = (props) => {
  return (
    <div className="numbers-card1-numbers-card">
      <span className="numbers-card1-number">
        {props.number ?? (
          <Fragment>
            <span className="numbers-card1-text2">
              <span>{/*locale-text_gH8vIW*/}</span>
            </span>
          </Fragment>
        )}
      </span>
      <span className="numbers-card1-text1">
        {props.text ?? (
          <Fragment>
            <span className="numbers-card1-text3">
              <span>{/*locale-text_xKad4g*/}</span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

NumbersCard1.defaultProps = {
  number: undefined,
  text: undefined,
}

NumbersCard1.propTypes = {
  number: PropTypes.element,
  text: PropTypes.element,
}

export default NumbersCard1
