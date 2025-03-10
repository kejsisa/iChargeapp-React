import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list1-text21">
                      <span>{/*locale-text_VlHxMu*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list1-text16">
                      <span>{/*locale-text_Myt6SW*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list1-text13">
                      <span>{/*locale-text_8dwj12*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list1-text17">
                      <span>{/*locale-text_uyqdR6*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list1-text11">
                      <span>{/*locale-text_p_1kl4*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list1-text14">
                      <span>{/*locale-text_0oUBvn*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list1-text19">
                      <span>{/*locale-text_dV-JUd*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list1-text12">
                      <span>{/*locale-text_XqCMAU*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list1-text20">
                      <span>{/*locale-text_V_sdgW*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list1-text18">
                      <span>{/*locale-text_HKvxAk*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list1-text15">
                      <span>{/*locale-text_o37zTl*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list1-text10">
                      <span>{/*locale-text_Q1hGMC*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content6: undefined,
  heading3: undefined,
  content4: undefined,
  heading2: undefined,
  content3: undefined,
  heading6: undefined,
  content1: undefined,
  content2: undefined,
  content5: undefined,
  heading4: undefined,
  heading5: undefined,
  heading1: undefined,
}

ContentList1.propTypes = {
  content6: PropTypes.element,
  heading3: PropTypes.element,
  content4: PropTypes.element,
  heading2: PropTypes.element,
  content3: PropTypes.element,
  heading6: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  content5: PropTypes.element,
  heading4: PropTypes.element,
  heading5: PropTypes.element,
  heading1: PropTypes.element,
}

export default ContentList1
