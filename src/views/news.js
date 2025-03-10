import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './news.css'

const News = (props) => {
  return (
    <div className="news-container1">
      <Helmet>
        <title>
          News - iCharge.app - Stacione dhe pika karikimi për makina elektrike.
        </title>
        <meta
          name="description"
          content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
        />
        <meta
          property="og:title"
          content="News - iCharge.app - Stacione dhe pika karikimi për makina elektrike."
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
      <header className="news-header1">
        <header data-thq="thq-navbar" className="news-navbar">
          <div className="news-left">
            <Link to="/" className="news-navlink1">
              <img
                alt="image"
                src="/logo_icharge_primary_1%20(1)-200h.webp"
                loading="eager"
                className="news-logo"
              />
            </Link>
          </div>
          <div data-thq="thq-navbar-btn-group" className="news-right"></div>
          <div data-thq="thq-burger-menu" className="news-burger-menu">
            <svg viewBox="0 0 1024 1024" className="news-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="news-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="news-nav1"
            >
              <div className="news-container2">
                <a href="##content" className="news-link10">
                  <img
                    alt="image"
                    src="/logo_icharge_primary_1%20(1)-200h.webp"
                    className="news-image1"
                  />
                </a>
                <div data-thq="thq-close-menu" className="news-menu-close">
                  <svg viewBox="0 0 1024 1024" className="news-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="news-nav2"
              >
                <Link to="/" className="news-navlink2">
                  <span>{/*locale-text_T2qKr0*/}</span>
                </Link>
                <Link to="/" className="news-navlink3">
                  <span>{/*locale-text_2pLiaj*/}</span>
                </Link>
                <a
                  href="https://m.icharge.app/#/homepage"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="news-link11"
                >
                  <span>{/*locale-text_pQjumr*/}</span>
                </a>
                <a href="#footer" className="news-link12">
                  <span>{/*locale-text_p6Cgyp*/}</span>
                </a>
                <Link to="/kontakt" className="news-navlink4">
                  <div className="news-book-btn">
                    <span className="news-text1">
                      <span>{/*locale-text_TRQYsw*/}</span>
                    </span>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
          <nav className="news-links1">
            <Link to="/" className="news-link13">
              <span>{/*locale-Link_Lb9zA0*/}</span>
            </Link>
            <Link to="/" className="news-link14">
              <span>{/*locale-Link_c6SMnV*/}</span>
            </Link>
            <a
              href="https://m.icharge.app/#/homepage"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link15"
            >
              <span>{/*locale-Link_ws056J*/}</span>
            </a>
            <Link to="/fushata" className="news-link16">
              <span>{/*locale-Link_8wzP9i*/}</span>
            </Link>
            <a href="#footer" className="news-link17">
              <span>{/*locale-Link_XT55fr*/}</span>
            </a>
          </nav>
        </header>
      </header>
      <section className="news-why">
        <div className="news-header2">
          <div data-aos="fade-right" className="news-heading1">
            <h2 className="news-title">
              <span>{/*locale-Title_Rnz7Um*/}</span>
            </h2>
          </div>
        </div>
        <div className="news-brands">
          <div className="news-row">
            <div className="news-item">
              <img
                alt="image"
                src="/icharge%20web%20(1).svg"
                className="news-image2"
              />
              <div className="news-details">
                <p className="news-description">
                  <span>{/*locale-Description_cvXCUJ*/}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="footer" className="news-footer">
        <div className="news-content">
          <div className="news-information">
            <div className="news-heading2">
              <a href="##content" className="news-link18">
                <img
                  alt="pastedImage"
                  src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-200h.webp"
                  loading="lazy"
                  className="news-pasted-image1"
                />
              </a>
              <span className="news-text2">
                <span>{/*locale-text_S83g-N*/}</span>
              </span>
            </div>
            <div className="news-socials">
              <a
                href="https://www.instagram.com/icharge.alb/"
                target="_blank"
                rel="noreferrer noopener"
                className="news-link19"
              >
                <div className="news-social1">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="news-icon14"
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
                className="news-link20"
              >
                <div className="news-social2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="news-icon18"
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
                className="news-link21"
              >
                <div className="news-social3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="news-icon20"
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
                className="news-link22"
              >
                <div className="news-social4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="news-icon24"
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
          <div className="news-links2">
            <div className="news-column1">
              <span className="news-header3">
                <span>{/*locale-Header_BtUv-s*/}</span>
              </span>
              <Link to="/" className="news-link23">
                <span>{/*locale-Link_3-Ce5E*/}</span>
              </Link>
              <Link to="/" className="news-link24">
                <span>{/*locale-Link_7ftX7X*/}</span>
              </Link>
              <a
                href="https://m.icharge.app/#/homepage"
                target="_blank"
                rel="noreferrer noopener"
                className="news-link25"
              >
                <span>{/*locale-Link_Ja3lLH*/}</span>
              </a>
              <Link to="/kushtet-e-perdorimit" className="news-link26">
                <span>{/*locale-Link_beRHr7*/}</span>
              </Link>
              <span className="news-link27">
                <span>{/*locale-Link_rQg6BF*/}</span>
              </span>
            </div>
            <div className="news-column2">
              <span className="news-header4">
                <span>{/*locale-Header_XFNQek*/}</span>
              </span>
              <a href="tel:+355694080227" className="news-link28">
                <span>{/*locale-Link_W3010N*/}</span>
              </a>
              <a
                href="mailto:office@icharge.app?subject="
                className="news-link29"
              >
                <span>{/*locale-Link_8MNt2n*/}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="news-pills">
          <div className="news-container3">
            <div className="news-you-tube1">
              <a
                href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                target="_blank"
                rel="noreferrer noopener"
                className="news-link30"
              >
                <img
                  alt="pastedImage"
                  sizes="(min-width: 768px) 800px, 480px"
                  src="/Icons/download%20(3)-600w.webp"
                  srcSet="/Icons//download%20(3)-600w.webp 800w, /Icons/download%20(3)-mobile.webp 480w"
                  className="news-pasted-image2"
                />
              </a>
            </div>
            <div className="news-you-tube2">
              <a
                href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app"
                target="_blank"
                rel="noreferrer noopener"
                className="news-link31"
              >
                <img
                  alt="pastedImage"
                  src="/Icons/download%20(4)-200h.webp"
                  className="news-pasted-image3"
                />
              </a>
            </div>
          </div>
        </div>
        <span className="news-text3">
          <span>{/*locale-text_j-c1Wb*/}</span>
        </span>
      </div>
    </div>
  )
}

export default News
