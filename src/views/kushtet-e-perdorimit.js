import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './kushtet-e-perdorimit.css'

const KushtetEPerdorimit = (props) => {
  return (
    <div className="kushtet-e-perdorimit-container1">
      <Helmet>
        <title>
          Kushtet-e-perdorimit - iCharge.app - Stacione dhe pika karikimi për
          makina elektrike.
        </title>
        <meta
          name="description"
          content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
        />
        <meta
          property="og:title"
          content="Kushtet-e-perdorimit - iCharge.app - Stacione dhe pika karikimi për makina elektrike."
        />
        <meta
          property="og:description"
          content="Zbuloni iCharge.app, platforma juaj për karikimin e makinave elektrike në Shqipëri. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d334a72c-d322-4e02-af2f-aa1a000a9ada/f77c7958-1225-4afe-a283-098a54e58587?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header className="kushtet-e-perdorimit-header1">
        <header data-thq="thq-navbar" className="kushtet-e-perdorimit-navbar">
          <div className="kushtet-e-perdorimit-left">
            <Link to="/" className="kushtet-e-perdorimit-navlink1">
              <img
                alt="image"
                src="/logo_icharge_primary_1%20(1)-200h.webp"
                loading="eager"
                className="kushtet-e-perdorimit-logo"
              />
            </Link>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="kushtet-e-perdorimit-right"
          ></div>
          <div
            data-thq="thq-burger-menu"
            className="kushtet-e-perdorimit-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="kushtet-e-perdorimit-icon10"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="kushtet-e-perdorimit-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="kushtet-e-perdorimit-nav1"
            >
              <div className="kushtet-e-perdorimit-container2">
                <Link to="/" className="kushtet-e-perdorimit-navlink2">
                  <img
                    alt="image"
                    src="/logo_icharge_primary_1%20(1)-200h.webp"
                    className="kushtet-e-perdorimit-image"
                  />
                </Link>
                <div
                  data-thq="thq-close-menu"
                  className="kushtet-e-perdorimit-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="kushtet-e-perdorimit-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="kushtet-e-perdorimit-nav2"
              >
                <Link to="/" className="kushtet-e-perdorimit-navlink3">
                  <span>{/*locale-text_4wNxjM*/}</span>
                </Link>
                <Link to="/" className="kushtet-e-perdorimit-navlink4">
                  <span>{/*locale-text_F_D_zW*/}</span>
                </Link>
                <a
                  href="https://m.icharge.app/#/homepage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kushtet-e-perdorimit-link10"
                >
                  <span>{/*locale-text_NWo9wB*/}</span>
                </a>
                <Link to="/" className="kushtet-e-perdorimit-navlink5">
                  <span>{/*locale-text_H6nyBr*/}</span>
                </Link>
                <Link to="/kontakt" className="kushtet-e-perdorimit-navlink6">
                  <div className="kushtet-e-perdorimit-book-btn">
                    <span className="kushtet-e-perdorimit-text1">
                      <span>{/*locale-text_7jCKAc*/}</span>
                    </span>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
          <nav className="kushtet-e-perdorimit-links1">
            <Link to="/" className="kushtet-e-perdorimit-link11">
              <span>{/*locale-Link_eP1Bw6*/}</span>
            </Link>
            <Link to="/" className="kushtet-e-perdorimit-link12">
              <span>{/*locale-Link_m_-hza*/}</span>
            </Link>
            <a
              href="https://m.icharge.app/#/homepage"
              target="_blank"
              rel="noreferrer noopener"
              className="kushtet-e-perdorimit-link13"
            >
              <span>{/*locale-Link_nEa8Zz*/}</span>
            </a>
            <Link to="/fushata" className="kushtet-e-perdorimit-link14">
              <span>{/*locale-Link_0fUOip*/}</span>
            </Link>
            <a href="#footer" className="kushtet-e-perdorimit-link15">
              <span>{/*locale-Link_QuUTX-*/}</span>
            </a>
          </nav>
        </header>
      </header>
      <div className="kushtet-e-perdorimit-container3 thq-section-padding">
        <div className="kushtet-e-perdorimit-max-width thq-section-max-width">
          <div className="kushtet-e-perdorimit-content7 thq-flex-column">
            <ul className="kushtet-e-perdorimit-ul thq-flex-column">
              <li className="thq-flex-column list-item">
                <h2 className="kushtet-e-perdorimit-heading1 thq-heading-2">
                  <span>{/*locale-Heading1_r-mqyZ*/}</span>
                </h2>
                <h3 className="kushtet-e-perdorimit-heading21 thq-heading-3">
                  <span>{/*locale-Heading2_fge3Fk*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content1 thq-body-small">
                  <span>{/*locale-Content1_GPYUgr*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading22 thq-heading-3">
                  <span>{/*locale-Heading2_sa5x3H*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content2 thq-body-small">
                  <span>{/*locale-Content2__bdAg1*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading3 thq-heading-3">
                  <span>{/*locale-Heading3_I_rqDi*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content3 thq-body-small">
                  <span>{/*locale-Content3_5Stw1Y*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading4 thq-heading-3">
                  <span>{/*locale-Heading4_82yVDj*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content4 thq-body-small">
                  <span>{/*locale-Content4_A3SpRZ*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading5 thq-heading-3">
                  <span>{/*locale-Heading5_iEoNHK*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content5 thq-body-small">
                  <span>{/*locale-Content5_kwD1it*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading610 thq-heading-3">
                  <span>{/*locale-Heading6_CHxLN1*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content610 thq-body-small">
                  <span>{/*locale-Content6_j0_Wil*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading611 thq-heading-3">
                  <span>{/*locale-Heading6_-GemTE*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content611 thq-body-small">
                  <span>{/*locale-Content6_Ap1Iga*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading612 thq-heading-3">
                  <span>{/*locale-Heading6_Ygl7Sj*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content612 thq-body-small">
                  <span>{/*locale-Content6_cXrHot*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading613 thq-heading-3">
                  <span>{/*locale-Heading6_9GH7ZV*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content613 thq-body-small">
                  <span>{/*locale-Content6_lu5D_v*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading614 thq-heading-3">
                  <span>{/*locale-Heading6_AxXlMA*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content614 thq-body-small">
                  <span>{/*locale-Content6_3PTUKp*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading615 thq-heading-3">
                  <span>{/*locale-Heading6_5n1fR7*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content615 thq-body-small">
                  <span>{/*locale-Content6_Mv3--J*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading616 thq-heading-3">
                  <span>{/*locale-Heading6_UcMAdF*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content616 thq-body-small">
                  <span>{/*locale-Content6_Q8GT8Z*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading617 thq-heading-3">
                  <span>{/*locale-Heading6_mYtqce*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content617 thq-body-small">
                  <span>{/*locale-Content6_vKPtQN*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading618 thq-heading-3">
                  <span>{/*locale-Heading6_W7RoTF*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content618 thq-body-small">
                  <span>{/*locale-Content6_3nHQ4g*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading619 thq-heading-3">
                  <span>{/*locale-Heading6_9ogpsS*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content619 thq-body-small">
                  <span>{/*locale-Content6_My1MBB*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading620 thq-heading-3">
                  <span>{/*locale-Heading6_cyJzJ-*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content620 thq-body-small">
                  <span>{/*locale-Content6_8BPlg6*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading621 thq-heading-3">
                  <span>{/*locale-Heading6_sg4XvN*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content621 thq-body-small">
                  <span>{/*locale-Content6_2fpDAD*/}</span>
                </p>
              </li>
              <li className="list-item">
                <h3 className="kushtet-e-perdorimit-heading622 thq-heading-3">
                  <span>{/*locale-Heading6_uWxgNN*/}</span>
                </h3>
                <p className="kushtet-e-perdorimit-content622 thq-body-small">
                  <span>{/*locale-Content6_ytOHh0*/}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer" className="kushtet-e-perdorimit-footer">
        <div className="kushtet-e-perdorimit-content8">
          <div className="kushtet-e-perdorimit-information">
            <div className="kushtet-e-perdorimit-heading">
              <a href="##content" className="kushtet-e-perdorimit-link16">
                <img
                  alt="pastedImage"
                  src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-200h.webp"
                  loading="lazy"
                  className="kushtet-e-perdorimit-pasted-image1"
                />
              </a>
              <span className="kushtet-e-perdorimit-text2">
                <span>{/*locale-text_Zcp2aL*/}</span>
              </span>
            </div>
            <div className="kushtet-e-perdorimit-socials">
              <a
                href="https://www.instagram.com/icharge.alb/"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link17"
              >
                <div className="kushtet-e-perdorimit-social1">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="kushtet-e-perdorimit-icon14"
                  >
                    <circle
                      r="1.44"
                      cx="22.406"
                      cy="9.594"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@icharge.app"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link18"
              >
                <div className="kushtet-e-perdorimit-social2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="kushtet-e-perdorimit-icon18"
                  >
                    <path
                      d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link19"
              >
                <div className="kushtet-e-perdorimit-social3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="kushtet-e-perdorimit-icon20"
                  >
                    <g fill="currentColor">
                      <path
                        d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                      <path d="M7.2 8.809H4V19.5h3.2z"></path>
                    </g>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.facebook.com/icharge.alb"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link20"
              >
                <div className="kushtet-e-perdorimit-social4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="kushtet-e-perdorimit-icon24"
                  >
                    <path
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                      fill="currentColor"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="kushtet-e-perdorimit-links2">
            <div className="kushtet-e-perdorimit-column1">
              <span className="kushtet-e-perdorimit-header2">
                <span>{/*locale-Header_PUNOzP*/}</span>
              </span>
              <Link to="/" className="kushtet-e-perdorimit-link21">
                <span>{/*locale-Link_keow8q*/}</span>
              </Link>
              <Link to="/" className="kushtet-e-perdorimit-link22">
                <span>{/*locale-Link_HB1BOD*/}</span>
              </Link>
              <a
                href="https://m.icharge.app/#/homepage"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link23"
              >
                <span>{/*locale-Link_ZcQv2Y*/}</span>
              </a>
              <Link
                to="/kushtet-e-perdorimit"
                className="kushtet-e-perdorimit-link24"
              >
                <span>{/*locale-Link_PGBv8z*/}</span>
              </Link>
              <span className="kushtet-e-perdorimit-link25">
                <span>{/*locale-Link_oPcwBd*/}</span>
              </span>
            </div>
            <div className="kushtet-e-perdorimit-column2">
              <span className="kushtet-e-perdorimit-header3">
                <span>{/*locale-Header_NNp2wv*/}</span>
              </span>
              <a
                href="tel:+355694080227"
                className="kushtet-e-perdorimit-link26"
              >
                <span>{/*locale-Link_oAPpmz*/}</span>
              </a>
              <a
                href="mailto:office@icharge.app?subject="
                className="kushtet-e-perdorimit-link27"
              >
                <span>{/*locale-Link_6msrP6*/}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="kushtet-e-perdorimit-pills">
          <div className="kushtet-e-perdorimit-container4">
            <div className="kushtet-e-perdorimit-you-tube1">
              <a
                href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link28"
              >
                <img
                  alt="pastedImage"
                  sizes="(min-width: 768px) 800px, 480px"
                  src="/Icons/download%20(3)-600w.webp"
                  srcSet="/Icons//download%20(3)-600w.webp 800w, /Icons/download%20(3)-mobile.webp 480w"
                  className="kushtet-e-perdorimit-pasted-image2"
                />
              </a>
            </div>
            <div className="kushtet-e-perdorimit-you-tube2">
              <a
                href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app"
                target="_blank"
                rel="noreferrer noopener"
                className="kushtet-e-perdorimit-link29"
              >
                <img
                  alt="pastedImage"
                  src="/Icons/download%20(4)-200h.webp"
                  className="kushtet-e-perdorimit-pasted-image3"
                />
              </a>
            </div>
          </div>
        </div>
        <span className="kushtet-e-perdorimit-text3">
          <span>{/*locale-text_W_16HE*/}</span>
        </span>
      </div>
    </div>
  )
}

export default KushtetEPerdorimit
