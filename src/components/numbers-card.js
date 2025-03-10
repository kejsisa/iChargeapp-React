import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './numbers-card.css'

const NumbersCard = (props) => {
  return (
    <div className="numbers-card-numbers-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="numbers-card-image"
      />
      <span className="numbers-card-number">
        {props.number1 ?? (
          <Fragment>
            <span className="numbers-card-text3">
              <span>{/*locale-text_5cuiK2*/}</span>
            </span>
          </Fragment>
        )}
      </span>
      <span className="numbers-card-text1">
        {props.text1 ?? (
          <Fragment>
            <span className="numbers-card-text2">
              <span>{/*locale-text_7Q2MCn*/}</span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

NumbersCard.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text1: undefined,
  number1: undefined,
}

NumbersCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.element,
  number1: PropTypes.element,
}

export default NumbersCard
