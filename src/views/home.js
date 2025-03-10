import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import OutlineButton from '../components/outline-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>
          iCharge.app - Stacione dhe pika karikimi për makina elektrike.
        </title>
        <meta
          name="description"
          content="iCharge.app: Zgjidhja inovative për makina elektrike. Zbuloni stacionet dhe pikat më të mira të karikimit me nje sherbim superior ne krahasim me Vega Group."
        />
        <meta
          property="og:title"
          content="iCharge.app - Stacione dhe pika karikimi për makina elektrike."
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
      <section className="home-hero">
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar">
            <div className="home-left1">
              <a href="#content" className="home-link10">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp"
                  loading="eager"
                  srcSet="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp 1200w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-tablet.webp 800w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-mobile.webp 480w"
                  className="home-logo"
                />
              </a>
            </div>
            <div data-thq="thq-navbar-btn-group" className="home-right1"></div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container11">
                  <a href="#content" className="home-link11">
                    <img
                      alt="image"
                      src="/logo_icharge_primary_1%20(1)3-200h.webp"
                      className="home-image10"
                    />
                  </a>
                  <div className="home-container12">
                    <div
                      data-thq="thq-close-menu"
                      className="home-menu-close"
                    ></div>
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <a href="#content" className="home-link12">
                    <span>{/*locale-text_5emypk*/}</span>
                  </a>
                  <a href="#banner" className="home-link13">
                    <span>{/*locale-text_NVjR43*/}</span>
                  </a>
                  <a
                    href="https://m.icharge.app/#/homepage"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link14"
                  >
                    <span>{/*locale-text_DjscAt*/}</span>
                  </a>
                  <a href="#footer" className="home-link15">
                    <span>{/*locale-text_Tft9Kz*/}</span>
                  </a>
                  <Link to="/kontakt" className="home-navlink1">
                    <div className="home-book-btn1">
                      <span className="home-text10">
                        <span>{/*locale-text_g7x65a*/}</span>
                      </span>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
            <nav className="home-links1">
              <a href="#content" className="home-link16">
                <span>{/*locale-Link_GPHYZ1*/}</span>
              </a>
              <a href="#banner" className="home-link17">
                <span>{/*locale-Link_nirMcx*/}</span>
              </a>
              <a
                href="https://m.icharge.app/#/homepage"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <span>{/*locale-Link_ahgayi*/}</span>
              </a>
              <Link to="/fushata" className="home-link19">
                <span>{/*locale-Link_QAYel7*/}</span>
              </Link>
              <a href="#footer" className="home-link20">
                <span>{/*locale-Link_1eRqGy*/}</span>
              </a>
            </nav>
          </header>
        </header>
        <div className="home-main1">
          <div id="content" className="home-content1">
            <div className="home-center">
              <div className="home-heading1">
                <h1 className="home-header2">
                  <span>{/*locale-Header_tvGGIk*/}</span>
                </h1>
              </div>
              <span className="home-text11">
                <span>{/*locale-text_17o3mc*/}</span>
              </span>
            </div>
            <div className="home-pills1">
              <div className="home-container13">
                <div className="home-you-tube1">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app&amp;pli=1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21"
                  >
                    <img
                      alt="pastedImage"
                      src="/play-store-badge.svg"
                      className="home-pasted-image1"
                    />
                  </a>
                </div>
                <div className="home-you-tube2">
                  <a
                    href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link22"
                  >
                    <img
                      alt="pastedImage"
                      src="/apple.svg"
                      className="home-pasted-image2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tours" className="home-quick-view">
        <div className="home-services">
          <div className="home-container14">
            <div className="home-container15">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
              </svg>
            </div>
            <h1 className="home-text12">
              <span>{/*locale-text_w7UGdx*/}</span>
            </h1>
            <span className="home-text13">
              <span>{/*locale-text_jBVUGA*/}</span>
            </span>
          </div>
          <div className="home-container16">
            <div className="home-container17">
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
              </svg>
            </div>
            <h1 className="home-text14">
              <span>{/*locale-text_JpfAth*/}</span>
            </h1>
            <span className="home-text15">
              <span>{/*locale-text_xKr29k*/}</span>
            </span>
          </div>
          <div className="home-container18">
            <div className="home-container19">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
              </svg>
            </div>
            <h1 className="home-text16">
              <span>{/*locale-text_DEZho6*/}</span>
            </h1>
            <span className="home-text17">
              <span>{/*locale-text_Q2hCCl*/}</span>
            </span>
          </div>
        </div>
      </section>
      <div className="home-speakers section-container">
        <div className="home-max-width1 max-content-container">
          <div className="home-speakers-container">
            <div className="home-speaker-card1">
              <div className="home-image-container1">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/untitled%20design%20(22)-2600h.webp"
                  loading="lazy"
                  srcSet="/untitled%20design%20(22)-2600h.webp 1200w, /untitled%20design%20(22)-tablet.webp 800w, /untitled%20design%20(22)-mobile.webp 480w"
                  className="home-image11"
                />
                <div className="home-read-more-container1">
                  <span className="home-hint1">
                    <span>{/*locale-hint_u9-jqV*/}</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-first-name1">
                <span>{/*locale-firstName_B4GSME*/}</span>
              </span>
              <span className="home-last-name1">
                <span>{/*locale-lastName_cr5S2g*/}</span>
              </span>
              <span className="home-text18">
                <span>{/*locale-text_2pCJ2X*/}</span>
              </span>
            </div>
            <div className="home-speaker-card2">
              <div className="home-image-container2">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/untitled%20design%20(23)-2600h.webp"
                  srcSet="/untitled%20design%20(23)-2600h.webp 1200w, /untitled%20design%20(23)-tablet.webp 800w, /untitled%20design%20(23)-mobile.webp 480w"
                  className="home-image12"
                />
                <div className="home-read-more-container2">
                  <span className="home-hint2">
                    <span>{/*locale-hint_Hrxk7Z*/}</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-first-name2">
                <span>{/*locale-firstName_b2fq1b*/}</span>
              </span>
              <span className="home-last-name2">
                <span>{/*locale-lastName_bvDCWe*/}</span>
              </span>
              <span className="home-text19">
                <span>{/*locale-text_Yb1yz6*/}</span>
              </span>
            </div>
            <div className="home-speaker-card3">
              <div className="home-image-container3">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/untitled%20design%20(24)-2600h.webp"
                  srcSet="/untitled%20design%20(24)-2600h.webp 1200w, /untitled%20design%20(24)-tablet.webp 800w, /untitled%20design%20(24)-mobile.webp 480w"
                  className="home-image13"
                />
                <div className="home-read-more-container3">
                  <span className="home-hint3">
                    <span>{/*locale-hint__RoLph*/}</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-first-name3">
                <span>{/*locale-firstName_wtxwdT*/}</span>
              </span>
              <span className="home-last-name3">
                <span>{/*locale-lastName_vTjV5k*/}</span>
              </span>
              <span className="home-text20">
                <span>{/*locale-text_DOsrq2*/}</span>
              </span>
            </div>
            <div className="home-speaker-card4">
              <div className="home-image-container4">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/karikuesac3-2600h.webp"
                  srcSet="/karikuesac3-2600h.webp 1200w, /karikuesac3-tablet.webp 800w, /karikuesac3-mobile.webp 480w"
                  className="home-image14"
                />
                <div className="home-read-more-container4">
                  <span className="home-hint4">
                    <span>{/*locale-hint_4ZTuhF*/}</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-first-name4">
                <span>{/*locale-firstName_nmdxx4*/}</span>
              </span>
              <span className="home-last-name4">
                <span>{/*locale-lastName_ZkLyIN*/}</span>
              </span>
              <span className="home-text21">
                <span>{/*locale-text_lVNqi2*/}</span>
              </span>
            </div>
            <div className="home-speaker-card5">
              <div className="home-image-container5">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/karikuesac2-2600h.webp"
                  srcSet="/karikuesac2-2600h.webp 1200w, /karikuesac2-tablet.webp 800w, /karikuesac2-mobile.webp 480w"
                  className="home-image15"
                />
                <div className="home-read-more-container5">
                  <span className="home-hint5">
                    <span>{/*locale-hint_H8UBcw*/}</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon28">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-first-name5">
                <span>{/*locale-firstName_gn-Bqg*/}</span>
              </span>
              <span className="home-last-name5">
                <span>{/*locale-lastName_U2lYgz*/}</span>
              </span>
              <span className="home-text22">
                <span>{/*locale-text_5Wc8tj*/}</span>
              </span>
            </div>
            <div className="home-speaker-card6">
              <div className="home-image-container6">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/karikuesac-2600h.webp"
                  srcSet="/karikuesac-2600h.webp 1200w, /karikuesac-tablet.webp 800w, /karikuesac-mobile.webp 480w"
                  className="home-image16"
                />
                <div className="home-read-more-container6">
                  <span className="home-hint6">
                    <span>{/*locale-hint_o2yAgP*/}</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon30">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-first-name6">
                <span>{/*locale-firstName_zGJZ6O*/}</span>
              </span>
              <span className="home-last-name6">
                <span>{/*locale-lastName_y-5dNC*/}</span>
              </span>
              <span className="home-text23">
                <span>{/*locale-text_XU2jN5*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="banner" className="home-banner1">
        <div className="home-container20">
          <div className="home-left2">
            <h2 className="home-text24 title">
              <span>{/*locale-text_D-ZXY-*/}</span>
            </h2>
            <span className="home-text25">
              <span>{/*locale-text_wghZpb*/}</span>
            </span>
          </div>
          <div className="home-image-container7">
            <img
              alt="pastedImage"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/untitled%20design%20(15)1-1200w.webp"
              loading="lazy"
              srcSet="/untitled%20design%20(15)1-1200w.webp 1200w, /untitled%20design%20(15)1-tablet.webp 800w, /untitled%20design%20(15)1-mobile.webp 480w"
              className="home-cards-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-banner-advanced-analytics">
        <div className="home-centered-container">
          <div className="home-image-container8">
            <img
              alt="pastedImage"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/white%20label%20mobile%20application-1200w.webp"
              loading="lazy"
              srcSet="/white%20label%20mobile%20application-1200w.webp 1200w, /white%20label%20mobile%20application-tablet.webp 800w, /white%20label%20mobile%20application-mobile.webp 480w"
              className="home-cards-image2"
            />
          </div>
          <div className="home-right2">
            <h2 className="home-text26 title">
              <span>{/*locale-text_6tlkvl*/}</span>
            </h2>
            <div className="home-category">
              <span className="home-text27">
                <span>{/*locale-text_NsaDRQ*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner2">
        <div className="home-container21">
          <div className="home-left3">
            <h2 className="home-text28 title">
              <span>{/*locale-text_vRLr1Y*/}</span>
            </h2>
            <span className="home-text29">
              <span>{/*locale-text_mLUiUD*/}</span>
            </span>
          </div>
          <div className="home-image-container9">
            <img
              alt="pastedImage"
              src="/untitled%20design%20(1)1.svg"
              loading="lazy"
              className="home-pasted-image3"
            />
          </div>
          <a
            href="https://m.icharge.app/#/homepage"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link23"
          >
            <div className="home-book-btn2">
              <span className="home-text30">
                <span>{/*locale-text_Uy5ApD*/}</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="home-container22 max-content-container">
        <div className="home-heading-container1">
          <h1 className="home-text31">
            <span>{/*locale-text_j8JWq9*/}</span>
          </h1>
        </div>
        <div className="home-numbers-container">
          <div className="home-numbers-card1">
            <span className="home-number1">
              <span>{/*locale-number_fwPEnn*/}</span>
            </span>
            <span className="home-text32">
              <span>{/*locale-text_vjq_FA*/}</span>
            </span>
          </div>
          <div className="home-numbers-card2">
            <span className="home-number2">
              <span>{/*locale-number_7aJISY*/}</span>
            </span>
            <span className="home-text33">
              <span>{/*locale-text_ozDGw4*/}</span>
            </span>
          </div>
          <div className="home-numbers-card3">
            <span className="home-number3">
              <span>{/*locale-number_OY7d2r*/}</span>
            </span>
            <span className="home-text34">
              <span>{/*locale-text_N-Pot-*/}</span>
            </span>
          </div>
          <div className="home-numbers-card4">
            <span className="home-number4">
              <span>{/*locale-number_Gx8JYU*/}</span>
            </span>
            <span className="home-text35">
              <span>{/*locale-text_WoQjl-*/}</span>
            </span>
          </div>
          <div className="home-numbers-card5">
            <span className="home-number5">
              <span>{/*locale-number_scZgns*/}</span>
            </span>
            <span className="home-text36">
              <span>{/*locale-text_gYmLu9*/}</span>
            </span>
          </div>
          <div className="home-numbers-card6">
            <span className="home-number6">
              <span>{/*locale-number_qWrHBm*/}</span>
            </span>
            <span className="home-text37">
              <span>{/*locale-text_rmQt63*/}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-section section-container">
        <div id="main-section" className="home-main2">
          <h2 className="home-text38">
            <span>{/*locale-text_00NMAZ*/}</span>
          </h2>
          <div className="home-cards-container1">
            <div className="home-container23">
              <img
                alt="image"
                src="/logo%20step%201.svg"
                loading="lazy"
                className="home-image17"
              />
              <div className="home-container24">
                <span className="home-text39">
                  <span>{/*locale-text_aLZ2CD*/}</span>
                </span>
                <OutlineButton button1="Discover place"></OutlineButton>
              </div>
            </div>
            <div className="home-container25">
              <img
                alt="image"
                src="/logo%20step%202.svg"
                loading="lazy"
                className="home-image18"
              />
              <div className="home-container26">
                <span className="home-text40">
                  <span>{/*locale-text_hKbzlQ*/}</span>
                </span>
                <OutlineButton button1="Discover place"></OutlineButton>
              </div>
            </div>
            <div className="home-container27">
              <img
                alt="image"
                src="/logo%20step%203%20(2).svg"
                loading="lazy"
                className="home-image19"
              />
              <div className="home-container28">
                <span className="home-text41">
                  <span>{/*locale-text_yb0LfW*/}</span>
                </span>
                <OutlineButton button1="Discover place"></OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-content-container">
          <h2 className="home-text42">
            <span>{/*locale-text_oyKjeJ*/}</span>
          </h2>
          <span className="home-text43">
            <span>{/*locale-text_pZKaQG*/}</span>
          </span>
          <div className="home-blog-cards-container">
            <div className="home-blog-card1">
              <img
                alt="image"
                src="/icharge%20edar-400w.webp"
                className="home-image20"
              />
              <div className="home-container29">
                <span className="home-text44">
                  <span>{/*locale-text_lMME-Q*/}</span>
                </span>
                <span className="home-text45">
                  <span>{/*locale-text_3s7_bm*/}</span>
                </span>
              </div>
            </div>
            <div className="home-blog-card2">
              <img
                alt="image"
                src="/icharge%20teg1-400w.webp"
                className="home-image21"
              />
              <div className="home-container30">
                <span className="home-text46">
                  <span>{/*locale-text_CaILk_*/}</span>
                </span>
                <span className="home-text47">
                  <span>{/*locale-text_4N2Cbc*/}</span>
                </span>
              </div>
            </div>
            <div className="home-blog-card3">
              <img
                alt="image"
                sizes="(min-width: 768px) 800px, 480px"
                src="/icharge%20rubik-600w.webp"
                srcSet="/icharge%20rubik-600w.webp 800w, /icharge%20rubik-mobile.webp 480w"
                className="home-image22"
              />
              <div className="home-container31">
                <span className="home-text48">
                  <span>{/*locale-text_am6Nw9*/}</span>
                </span>
                <span className="home-text49">
                  <span>{/*locale-text_5Qepmu*/}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-sponsors">
        <div className="home-header3">
          <div data-aos="fade-right" className="home-heading2">
            <h2 className="home-title">
              <span>{/*locale-Title_bWn2aZ*/}</span>
            </h2>
          </div>
        </div>
        <div className="home-brands">
          <div className="brand home-brand1">
            <img
              alt="image"
              src="/usembassy-200h.webp"
              loading="lazy"
              className="home-image23"
            />
          </div>
          <div className="brand home-brand2">
            <img
              alt="image"
              src="/balfin-200h.webp"
              loading="lazy"
              className="home-image24"
            />
          </div>
          <div className="brand home-brand3">
            <img
              alt="image"
              src="/kurumpng1-200h.webp"
              loading="lazy"
              className="home-image25"
            />
          </div>
          <div className="home-brand4 brand">
            <img
              alt="image"
              src="/aiba-200h.webp"
              loading="lazy"
              className="home-image26"
            />
          </div>
          <div className="home-brand5 brand">
            <img
              alt="image"
              src="/greentaxi-200h.webp"
              loading="lazy"
              className="home-image27"
            />
          </div>
          <div className="home-brand6 brand">
            <img
              alt="image"
              src="/beetaxi-200h.webp"
              loading="lazy"
              className="home-image28"
            />
          </div>
          <div className="home-brand7 brand">
            <img
              alt="image"
              src="/kingtaxipng-200h.webp"
              loading="lazy"
              className="home-image29"
            />
          </div>
          <div className="home-brand8 brand">
            <img
              alt="image"
              src="/unnamed-200h.webp"
              loading="lazy"
              className="home-image30"
            />
          </div>
        </div>
      </section>
      <div className="home-section-five section-container">
        <div className="home-max-width3 max-content-container">
          <div className="home-heading-container2">
            <h2 className="home-text50">
              <span>{/*locale-text_xDSyXJ*/}</span>
            </h2>
          </div>
          <div className="home-cards-container2">
            <div className="home-grid-card1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="home-icon32"
              >
                <path
                  d="M8.314 5.059L9 3h6l.686 2.059A4 4 0 0 1 19 9v3a2 2 0 0 1 2 2v5a2 2 0 1 1-4 0H7a2 2 0 1 1-4 0v-5a2 2 0 0 1 2-2V9a4 4 0 0 1 3.314-3.941M9 7a2 2 0 0 0-2 2v3h10V9a2 2 0 0 0-2-2zm-3 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  fill="currentColor"
                ></path>
              </svg>
              <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h106v-86h256v86h106q50 0 62 42z"></path>
              <span className="home-text51">
                <span>{/*locale-text_Jw0SfC*/}</span>
              </span>
            </div>
            <div className="home-grid-card2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="home-icon35"
              >
                <path
                  d="M7.5 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM4.9 1A2.9 2.9 0 0 0 2 3.9V6h-.5a.5.5 0 0 0 0 1H2v6.7A1.3 1.3 0 0 0 3.3 15h1.4A1.3 1.3 0 0 0 6 13.7V13h4v.7a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3V7h.5a.5.5 0 0 0 0-1H14V3.9A2.9 2.9 0 0 0 11.1 1zM13 3.9V8H3V3.9C3 2.85 3.85 2 4.9 2h6.2c1.05 0 1.9.85 1.9 1.9m0 9.1v.7a.3.3 0 0 1-.3.3h-1.4a.3.3 0 0 1-.3-.3V13zm-8 0v.7a.3.3 0 0 1-.3.3H3.3a.3.3 0 0 1-.3-.3V13zm1.5-2.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.75.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="home-text52">
                <span>{/*locale-text_9Sd3id*/}</span>
              </span>
            </div>
            <div className="home-grid-card3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="home-icon37"
              >
                <path
                  d="M17.3 5C19 6.5 20 8.6 20 11c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.4 1.1-4.5 2.7-6zm.7-2H6l-.6.5C3.2 5.4 2 8.1 2 11c0 5.5 4.5 10 10 10s10-4.5 10-10c0-2.9-1.2-5.6-3.4-7.5zm-5 4.5c0 .8.7 1.5 1.5 1.5S16 8.3 16 7.5S15.3 6 14.5 6S13 6.7 13 7.5m-5 0C8 8.3 8.7 9 9.5 9S11 8.3 11 7.5S10.3 6 9.5 6S8 6.7 8 7.5M7 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4.5 2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m.5-2c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4.5 2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m2.5-4c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="home-text53">
                <span>{/*locale-text_YP4jHd*/}</span>
              </span>
            </div>
            <div className="home-grid-card4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="home-icon39"
              >
                <path
                  d="m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M8 18v-4.5H6L10 6v5h2z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="home-text54">
                <span>{/*locale-text_7xn24K*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-previous-events1 section-container">
        <div className="home-previous-events2 section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text55">
                <span>{/*locale-text_mqsDtU*/}</span>
              </h1>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <div data-type="slide" className="home-slide1 slide"></div>
            <div data-type="slide" className="home-slide2 slide"></div>
            <div data-type="slide" className="home-slide3 slide"></div>
            <div data-type="slide" className="home-slide4 slide"></div>
            <div data-type="slide" className="home-slide5 slide"></div>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon41">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon43">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <section className="home-faq">
        <div className="home-heading3">
          <span className="home-text56">
            <span>{/*locale-text_zDvL13*/}</span>
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text57">
                <span>{/*locale-text_S_GdoK*/}</span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="accordionIcon home-icon45"
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text58">
                <span>{/*locale-text_Q_rz5e*/}</span>
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header5">
              <span className="home-text59">
                <span>{/*locale-text_f6GeAi*/}</span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="accordionIcon home-icon47"
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text60">
                <span>{/*locale-text_I3Bueu*/}</span>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header6">
              <span className="home-text61">
                <span>{/*locale-text_sB4DRd*/}</span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="accordionIcon home-icon49"
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text62">
                <span>{/*locale-text_dktsof*/}</span>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header7">
              <span className="home-text63">
                <span>{/*locale-text_MzU2uG*/}</span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="accordionIcon home-icon51"
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text64">
                <span>{/*locale-text_VoFqS6*/}</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container33">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-news">
        <div className="home-heading4">
          <h1 className="home-text65">
            <span>{/*locale-text_bOAgqV*/}</span>
          </h1>
          <p className="home-text66">
            <span>{/*locale-text_Z1WUx8*/}</span>
          </p>
        </div>
        <div className="home-list">
          <div className="home-item1">
            <div className="home-image31">
              <img
                alt="image"
                src="/logoicharge-removebg-preview%20(1)-200h.webp"
                className="home-image32"
              />
            </div>
            <div className="home-content6">
              <div className="home-details1">
                <span className="home-date1">
                  <span>{/*locale-Date_4Ugar0*/}</span>
                </span>
                <p className="home-quick-description1">
                  <span>{/*locale-QuickDescription__5bD-0*/}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="home-item2">
            <div className="home-image33">
              <img
                alt="image"
                src="/icharge%20web%20news.svg"
                className="home-image34"
              />
            </div>
            <div className="home-content7">
              <div className="home-details2">
                <span className="home-date2">
                  <span>{/*locale-Date_mRConw*/}</span>
                </span>
                <span className="home-text67">
                  <span>{/*locale-text_p0BNOX*/}</span>
                </span>
                <p className="home-quick-description2">
                  <span>{/*locale-QuickDescription_XY9PcW*/}</span>
                </p>
              </div>
              <Link to="/news" className="home-navlink2">
                <div className="home-more read-more">
                  <span className="home-text68">
                    <span>{/*locale-text_PtXXPB*/}</span>
                  </span>
                  <img
                    alt="image"
                    src="/external/arrow-2.svg"
                    className="home-image35"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="home-cta">
        <div className="home-container34">
          <div className="home-container35">
            <h2 className="home-text69">
              <span>{/*locale-text_BlFLsS*/}</span>
            </h2>
            <span className="home-text70">
              <span>{/*locale-text_SemabB*/}</span>
            </span>
            <Link to="/kontakt" className="home-navlink3">
              <div className="home-book-btn3">
                <span className="home-text71">
                  <span>{/*locale-text_G7au6x*/}</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="home-container36">
            <img
              alt="image"
              src="/icharge.app%20office.svg"
              image_src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image36"
            />
          </div>
        </div>
      </div>
      <div id="footer" className="home-footer">
        <div className="home-content8">
          <div className="home-information">
            <div className="home-heading5">
              <a href="##content" className="home-link24">
                <img
                  alt="pastedImage"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp"
                  loading="lazy"
                  srcSet="/logo_icharge_primary_page-0002-removebg-preview-200h-200h-1500w.webp 1200w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-tablet.webp 800w, /logo_icharge_primary_page-0002-removebg-preview-200h-200h-mobile.webp 480w"
                  className="home-pasted-image4"
                />
              </a>
              <span className="home-text72">
                <span>{/*locale-text_FhNUyK*/}</span>
              </span>
            </div>
            <div className="home-socials">
              <a
                href="https://www.instagram.com/icharge.alb/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link25"
              >
                <div className="home-social1">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon53"
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
                className="home-link26"
              >
                <div className="home-social2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon57"
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
                className="home-link27"
              >
                <div className="home-social3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon59"
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
                className="home-link28"
              >
                <div className="home-social4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon63"
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
          <div className="home-links2">
            <div className="home-column1">
              <span className="home-header8">
                <span>{/*locale-Header_frdYbI*/}</span>
              </span>
              <a href="#content" className="home-link29">
                <span>{/*locale-Link_oSbKPo*/}</span>
              </a>
              <a href="#banner" className="home-link30">
                <span>{/*locale-Link_J7iJcD*/}</span>
              </a>
              <a
                href="https://m.icharge.app/#/homepage"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link31"
              >
                <span>{/*locale-Link_RI7m2t*/}</span>
              </a>
              <Link to="/kushtet-e-perdorimit" className="home-link32">
                <span>{/*locale-Link_QQxiSO*/}</span>
              </Link>
              <span className="home-link33">
                <span>{/*locale-Link_tHEerm*/}</span>
              </span>
            </div>
            <div className="home-column2">
              <span className="home-header9">
                <span>{/*locale-Header_IPl1qq*/}</span>
              </span>
              <a href="tel:+355694080227" className="home-link34">
                <span>{/*locale-Link_g8es1P*/}</span>
              </a>
              <a
                href="mailto:office@icharge.app?subject="
                className="home-link35"
              >
                <span>{/*locale-Link_Ov1kZt*/}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-pills2">
          <div className="home-container37">
            <div className="home-you-tube3">
              <a
                href="https://apps.apple.com/lv/app/icharge-app/id6479523452"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link36"
              >
                <img
                  alt="pastedImage"
                  sizes="(min-width: 768px) 800px, 480px"
                  src="/Icons/download%20(3)-600w.webp"
                  srcSet="/Icons//download%20(3)-600w.webp 800w, /Icons/download%20(3)-mobile.webp 480w"
                  className="home-pasted-image5"
                />
              </a>
            </div>
            <div className="home-you-tube4">
              <a
                href="https://play.google.com/store/apps/details?id=com.icharge.mobile.app"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link37"
              >
                <img
                  alt="pastedImage"
                  src="/Icons/download%20(4)-200h.webp"
                  className="home-pasted-image6"
                />
              </a>
            </div>
          </div>
        </div>
        <span className="home-text73">
          <span>{/*locale-text_LdtFP1*/}</span>
        </span>
      </div>
    </div>
  )
}

export default Home
