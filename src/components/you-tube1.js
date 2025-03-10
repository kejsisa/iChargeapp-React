import React from 'react'

import PropTypes from 'prop-types'

import './you-tube1.css'

const YouTube1 = (props) => {
  return (
    <div className={`you-tube1-you-tube ${props.rootClassName} `}>
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="you-tube1-pasted-image"
      />
    </div>
  )
}

YouTube1.defaultProps = {
  pastedImageSrc:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  pastedImageAlt: 'pastedImage',
}

YouTube1.propTypes = {
  pastedImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default YouTube1
