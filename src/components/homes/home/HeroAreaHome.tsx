'use client'
import Link from 'next/link';
import { type JSX } from 'react';
import { scroller } from 'react-scroll';
import HeroArrowIcon from '@/svg/home/HeroIcons/HeroArrowIcon';
import { HeroSocialLinks } from '@/components/common/SocialLinks';
import Lottie from 'lottie-react';
import heroAnimation from '@/assets/lottie/hero-animation.json';
interface DataType {
  slide_text: string[];
  sub_title: string;
  title_1: string;
  title_2: string;
  sm_info: JSX.Element;
  btn_text: JSX.Element;
}

const hero_content: DataType = {
  slide_text: [
    "Websites",
    "Mobile Apps",
    "Landing Pages",
    "Portfolios",
    "Automation Scripts",
    "MVPs",
  ],
  sub_title: "Rahul Reddy / Founder, Reddystack",
  title_1: "We Design & Build",
  title_2: "Websites, Mobile Apps, Landing Pages, Portfolios, Automation Scripts & MVPs",
  sm_info: <>Websites, mobile apps, landing pages, portfolios, automation scripts, and MVPs for startups and small businesses with clear scope and premium execution.</>,
  btn_text: <>Start <br /> Your Project</>,
}
const { slide_text, sub_title, title_1, title_2, sm_info, btn_text } = hero_content;

// scroll to tp-sv section 
const scrollTo = () => {
  scroller.scrollTo('tp-sv', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const HeroAreaHome = () => {
  return (
    <>

      <section className="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2">
        <div className="tp-hero-social-wrapper">
          <span className="tp-hero-social-bar"></span>
          <div className="tp-hero-social">
            <HeroSocialLinks />
          </div>
        </div>
        <div className="tp-hero-shape">
          <div className="tp-hero-shape-1 background-white-mode" style={{ backgroundImage: 'url(/assets/img/hero/hero-overlay.png)' }}></div>
          <div className="tp-hero-shape-1 background-dark-mode" style={{ backgroundImage: 'url(/assets/img/hero/hero-overlay-2.png)' }}></div>
          <span className="tp-hero-shape-2"></span>
        </div>
        <div className="tp-hero-bottom-text-wrapper">
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="tp-hero-left-wrapper">
                <div className="tp-hero-content p-relative z-index-1">
                  <span className="singleLine">{sub_title}</span>
                  <h1 className="tp-hero-title tp_title_anim">
                    <strong className="tp-hero-title-static">{title_1}</strong> <br />
                    <span className="tp-hero-title-secondary">{title_2}</span>
                  </h1>
                  <p>{sm_info}</p>
                  <div className="tp-hero-btn wrap">
                    <div className="tp-hover-btn-wrapper tp-btn-bounce">
                      <Link href="/contact" className="tp-hover-btn tp-hover-btn-item tp-btn-circle square">
                        <span className="tp-btn-circle-text" >
                          {btn_text}
                        </span>
                        <span className="tp-btn-circle-arrow">
                          <HeroArrowIcon />
                        </span>
                        <i className="tp-btn-circle-dot"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-hero-scroll smooth">
                    <a className="pointer" onClick={scrollTo}>
                      <span className="tp-hero-scroll-bar"></span>
                      <span className="tp-hero-scroll-mouse"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="tp-hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                <div className="tp-hero-thumb-shape">
                  <span className="tp-hero-thumb-shape-3"></span>
                </div>
                <div className="tp-hero-thumb">
                  <Lottie
                    animationData={heroAnimation}
                    loop={true}
                    className="tp-hero-lottie"
                    rendererSettings={{ preserveAspectRatio: 'xMidYMax meet' }}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAreaHome;

