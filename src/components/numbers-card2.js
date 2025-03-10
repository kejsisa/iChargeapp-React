import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './numbers-card2.css'

const NumbersCard2 = (props) => {
  return (
    <div className="numbers-card2-numbers-card">
      <span className="numbers-card2-number">
        {props.number ?? (
          <Fragment>
            <span className="numbers-card2-text3">
              <span>{/*locale-text_nLgpkV*/}</span>
            </span>
          </Fragment>
        )}
      </span>
      <span className="numbers-card2-text1">
        {props.text ?? (
          <Fragment>
            <span className="numbers-card2-text2">
              <span>{/*locale-text_KM7DUw*/}</span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

NumbersCard2.defaultProps = {
  text: undefined,
  number: undefined,
}

NumbersCard2.propTypes = {
  text: PropTypes.element,
  number: PropTypes.element,
}

export default NumbersCard2
