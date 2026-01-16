'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState, type JSX } from 'react';
import Image, { StaticImageData } from 'next/image';

import blog_img_3 from "@/assets/img/blog/blog-1.jpg";
import blog_img_4 from "@/assets/img/blog/blog-2.jpg";
import blog_img_5 from "@/assets/img/blog/blog-3.jpg";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  priceing_data: {
    tab_id: string;
    tab_content: string;
    tab_items?: {
      time?: string;
      info_1?: string;
      info_2?: string | JSX.Element;
      price?: string;
      btn_text?: string;
      img?: StaticImageData | any;
      course_meta?: string;
      course_title?: string;
      new_price?: string;
      old_price?: string;
      offer?: string;
      date?: string;
      title?: string;
      category?: string;
    }[];
  }[]
}

const price_content: DataType = {
  subtitle: "Collaboration",
  title: <>Strategic <br /> Partnerships</>,
  priceing_data: [
    {
      tab_id: "home",
      tab_content: "Pricing",
      tab_items: [
        {
          time: "Growth Sprint",
          info_1: "Paid monthly",
          info_2: "Cancel anytime",
          price: "$50/mo",
          btn_text: "Get Started",
        },
        {
          time: "Scale & Optimize",
          info_1: "Paid monthly",
          info_2: "Save $800",
          price: "$100/mo",
          btn_text: "Get Started",
        },
        {
          time: "Not sure?",
          info_1: "Check the skill",
          info_2: <>You can order <br /> 1 free task</>,
          btn_text: "Free Skill Check",
        }
      ]
    },
    {
      tab_id: "blog",
      tab_content: "Blog",
      tab_items: [
        {
          img: blog_img_3,
          date: "October 10, 2023",
          title: "6 practical exercises to learn UI/UX designer.",
          category: "UX Design / Branding",
        },
        {
          img: blog_img_4,
          date: "June 12, 2023",
          title: "How to build photoshoots Scene",
          category: "UX Design / Branding",
        },
        {
          img: blog_img_5,
          date: "May 21, 2023",
          title: "The ABCs of conversion oriented design",
          category: "UX Design / Branding",
        }
      ]
    }
  ]
}

const { subtitle, title, priceing_data } = price_content

const PriceAreaHomeOne = ({ style }: any) => {
  const [activeTab, setActiveTab] = useState("home");
  const activeRef = useRef<HTMLButtonElement>(null);
  const marker = useRef<HTMLSpanElement>(null);

  // handleActive
  const handleActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tab: string) => {
    setActiveTab(tab);
    const buttonElement = e.target as HTMLButtonElement;
    if (buttonElement.classList.contains("active") && marker.current) {
      marker.current.style.left = buttonElement.offsetLeft + "px";
      marker.current.style.width = buttonElement.offsetWidth + "px";
    }
  };

  useEffect(() => {
    if (activeTab && activeRef.current && activeRef.current.classList.contains("active") && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab]);


  return (
    <>
      <section className={`${style ? 'sv-inner__price-area sv-inner__price-customize black-bg-3' : 'tp-pcb-area pt-80'} pb-70`}>
        {style ? null
          :
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="tp-section-title-wrapper mb-30 text-start text-md-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {style ?
                <div className="sv-inner__price-title-box text-center">
                  <h4 className="tp-section-title-3 tp_title_anim">Services & Pricing</h4>
                  <p className="tp_title_anim">Predictable investment, exponential impact.</p>
                </div>
                :
                <div className="tp-pcb-tab blog-btn-tab d-flex justify-content-center mb-80">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {priceing_data.map((item, index) =>
                      <li key={index} className="nav-items" role="presentation">
                        <button
                          className={`nav-links ${activeTab === item.tab_id ? "active" : ""}`}
                          id={`${item.tab_id}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.tab_id}`}
                          type="button"
                          role="tab"
                          aria-controls={item.tab_id}
                          ref={activeTab === item.tab_id ? activeRef : null}
                          onClick={(e) => handleActive(e, item.tab_id)}
                          aria-selected={index === 0 ? "true" : "false"}
                          tabIndex={-1}
                        >
                          {item.tab_content}
                        </button>
                      </li>
                    )}
                  </ul>
                  <span ref={marker} id="blog-btn-bg"></span>
                </div>
              }
            </div>
          </div>
          <div className="tp-pcb-tab-wrapper">
            <div className="row">
              <div className="tab-content" id="myTabContent">
                {priceing_data.map((item, i) =>
                  <div key={i}
                    className={`tab-pane fade ${i === 0 ? "active show" : ""}`}
                    id={item.tab_id} role="tabpanel" aria-labelledby={`${item.tab_id}-tab`}>

                    {item.tab_id === "home" &&
                      <div className="tp-price-inner">
                        <div className="row">
                          {item.tab_items?.map((inner_item, inner_i) =>
                            <div key={inner_i} className="col-xl-4 col-lg-4 col-md-6 mb-70">
                              <div className="tp-price-item">
                                <div className={`tp-price-head ${inner_i === 2 ? "mb-125" : "mb-100"} text-center`}>
                                  <h4 className="tp-price-head-title">{inner_item.time}</h4>
                                  <span>{inner_item.info_1}</span>
                                </div>

                                <div className={`tp-price-body ${inner_i === 2 ? "" : "mb-35"} text-center`}>
                                  <span className={`${inner_i === 2 ? "tp-price-text" : inner_i === 1 ? "tp-price-radius-border" : ""}`}>
                                    {inner_item.info_2}
                                  </span>
                                  {inner_i === 2 ? "" : <h4 className="tp-body-title">{inner_item.price}</h4>}
                                </div>

                                <div className="tp-price-btn-box text-center">
                                  <Link
                                    className={`${style ? "tp-btn-price-white" : inner_i === 2 ? "tp-btn-price-border" : "tp-btn-price"}`} href="/contact">
                                    <div>
                                      <span>{inner_item.btn_text}</span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    }

                    {item.tab_id === "blog" &&
                      <div className="tp-blog-inner">
                        <div className="row gx-45">
                          {item.tab_items?.map((inner_item, index) =>
                            <div key={index} className="col-xl-4 col-lg-4 mb-70">
                              <div className="tp-blog-item">
                                <div className="tp-blog-thumb fix">
                                  <Link href="/blog-details">
                                    <Image className="w-100" src={inner_item.img} alt="image-here" />
                                  </Link>
                                </div>
                                <div className="tp-blog-content">
                                  <h4 className="tp-blog-title-sm">
                                    <Link href="/blog-details">{inner_item.title}</Link></h4>
                                  <div className="tp-blog-meta d-flex justify-content-between align-items-center">
                                    <span>{inner_item.date}</span>
                                    <span><Link href="/blog-details">{inner_item.category}</Link></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceAreaHomeOne;