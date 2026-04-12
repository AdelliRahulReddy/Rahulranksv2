'use client';
import React, { type JSX } from 'react';
import { CopyRight } from '@/components/common/SocialLinks';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import InstagramIcon from '@/svg/icons/InstagramIcon';
import TelegramIcon from '@/svg/icons/TelegramIcon';
import XIcon from '@/svg/icons/XIcon';


interface DataType {
  title: string;
  title_2: JSX.Element;
  btn_text_1: string;
  btn_text_2: string;
  footer_data: {
    id: number;
    name: string;
    user_name: string;
    link: string;
    icon: React.JSX.Element;
  }[];
}

const footer_content: DataType = {
  title: "Start your next build with clarity",
  title_2: <>Start your next build <br /> with clarity</>,
  btn_text_1: 'Send Project Brief',
  btn_text_2: 'Start Your Project',
  footer_data: [
    {
      id: 1,
      name: "Instagram",
      user_name: "@reddy.stack",
      link: siteConfig.socialLinks.instagram,
      icon: <InstagramIcon />,
    },
    {
      id: 2,
      name: "X",
      user_name: "@reddystack",
      link: siteConfig.socialLinks.x,
      icon: <XIcon />,
    },
    {
      id: 3,
      name: "Telegram",
      user_name: "@reddy_stack",
      link: siteConfig.socialLinks.telegram,
      icon: <TelegramIcon />,
    },
  ]
}

const { btn_text_1, btn_text_2, title_2, footer_data } = footer_content





const FooterOne = ({ style }: any) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";
  const whatsappHref = `https://wa.me/${siteConfig.phoneHref.replace(/^\+/, "")}?text=${encodeURIComponent("Hi Rahul, I want to discuss a project.")}`;
  const primaryCtaHref = whatsappHref;
  const primaryCtaLabel = "WhatsApp Me";





  return (
    <>
      <footer>
        <div className={`tp-footer-bg ${style ? "tp-footer__customize  black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
          style={{ backgroundImage: `url(${bg_img})` }}>
          <div className="tp-footer-circle-1">
            <span></span>
          </div>
          <div className="tp-footer-circle-2">
            <span></span>
          </div>
          <div className="tp-footer-circle-3" data-speed=".7">
            <span></span>
          </div>
          <div className={`tp-footer-area ${style ? "tp-footer-inner__customize" : ""} pb-80 pt-120`}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-footer-content text-center">
                    <h3 className={`tp-footer-title ${style ? "" : "big"} tp_title_anim`}>{title_2}</h3>
                  </div>
                </div>
              </div>
              {style ?
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <Link
                          className="tp-btn-white-xl w-100"
                          href={primaryCtaHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div>
                            <span>{primaryCtaLabel}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <a className="tp-btn-grey-xl w-100" target="_blank" rel="noreferrer" href={siteConfig.socialLinks.email}>
                          <div>
                            <span>Send Project Brief</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <a className="tp-btn-green w-100" href={siteConfig.socialLinks.email}>
                          <div>
                            <span>{btn_text_1}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <Link className="tp-btn-white-xl w-100" href={primaryCtaHref} target="_blank" rel="noreferrer">
                          <div>
                            <span>{primaryCtaLabel}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }

              <div className="row gx-50">
                {footer_data.map((item, index) => (
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <div className="tp-footer-social-item d-flex align-items-center justify-content-between">
                        <span className="tp-footer-anim-border"></span>
                        <div className="tp-footer-social-text z-index-1">
                          <span className="child-1">{item.name}</span>
                          <span className="child-2">{item.user_name}</span>
                        </div>
                        <div className="tp-footer-social-icon z-index-1">
                          <span>
                            {item.icon}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tp-copyright-area pb-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-left text-center text-md-start">
                    <p><CopyRight /></p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-right text-center text-md-end">
                    <span>{new Date().getFullYear()} Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;

