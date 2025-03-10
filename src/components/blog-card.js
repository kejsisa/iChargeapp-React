import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-blog-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-card-image"
      />
      <div className="blog-card-container">
        <button className="blog-card-button button-secondary button">
          <span>
            {props.button1 ?? (
              <Fragment>
                <span className="blog-card-text5">
                  <span>{/*locale-text_WMkRdp*/}</span>
                </span>
              </Fragment>
            )}
          </span>
        </button>
        <span className="blog-card-text2">
          {props.text11 ?? (
            <Fragment>
              <span className="blog-card-text4">
                <span>{/*locale-text_QkB01O*/}</span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <span className="blog-card-text3">
        <span>{/*locale-text_AAjVmJ*/}</span>
      </span>
    </div>
  )
}

BlogCard.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  text11: undefined,
  button1: undefined,
  imageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e103e61d-c76d-4f0a-a1c8-116985255d0d/97a485c1-12f1-466e-8993-ac95e1ba9e3e?org_if_sml=1&force_format=original',
}

BlogCard.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.element,
  button1: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default BlogCard
