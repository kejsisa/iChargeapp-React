import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-info">
        <span className="card-text1">
          {props.text11 ?? (
            <Fragment>
              <span className="card-text2">
                <span>{/*locale-text_PU1O8g*/}</span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  text11: undefined,
  rootClassName: '',
}

Card.propTypes = {
  text11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Card
