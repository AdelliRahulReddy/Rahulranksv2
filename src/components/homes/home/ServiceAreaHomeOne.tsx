'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    path: string;
    question: string;
    answer: string;
    some_features: string[];
    linkLabel: string;
  }[];
}

const service_content: DataType = {
  subtitle: "Core Services",
  title: <>What <br /> Reddystack Builds</>,
  sm_des: <>Reddystack builds landing pages, business websites, apps, MVPs, custom web applications, SEO services, and automation scripts for startups, founders, and growth-focused teams.</>,
  accordion_data: [
    {
      id: 1, tab_id: "One", path: "/website-development", question: "Business Websites & Landing Pages",
      answer: "We design and build SEO friendly business websites, service pages, and launch pages with strong user experience, clear contact paths, and custom domain setup when needed.",
      some_features: ["Business Websites", "Landing Pages", "Lead Forms"],
      linkLabel: "Website Development Services"
    },
    {
      id: 2, tab_id: "Two", path: "/seo-services", question: "SEO Services for Small Businesses",
      answer: "We shape service pages, metadata, crawl paths, schema, and internal links so small businesses have clearer search visibility and better inquiry flow.",
      some_features: ["SEO Services", "Service Pages", "Search Visibility"],
      linkLabel: "SEO Services for Small Businesses"
    },
    {
      id: 3, tab_id: "Three", path: "/landing-page-development-for-lead-generation", question: "Landing Page Development Services",
      answer: "We build campaign pages, SaaS pages, app launch pages, and service offer pages with focused messaging, forms, tracking, and one clear conversion action.",
      some_features: ["Landing Pages", "Lead Generation", "Campaign Tracking"],
      linkLabel: "Landing Page Development Services"
    },
    {
      id: 4, tab_id: "Four", path: "/mvp-development-for-startup-founders", question: "MVP Development for Startups",
      answer: "We turn ideas into lean MVPs and application builds with controlled scope, clean flows, and fast execution for a usable first release.",
      some_features: ["MVP Development", "Startup Validation", "Rapid Execution"],
      linkLabel: "MVP Development for Startups"
    },
    {
      id: 5, tab_id: "Five", path: "/custom-web-application-development-services", question: "Custom Web Applications",
      answer: "We create dashboards, portals, internal tools, and workflow systems when your business needs users to take action instead of only reading a website.",
      some_features: ["Custom Web Apps", "Dashboards", "Internal Tools"],
      linkLabel: "Custom Web Application Development"
    },
    {
      id: 6, tab_id: "Six", path: "/ai-automation", question: "AI Automation Services",
      answer: "We build practical automation systems that reduce repeated work, improve real time lead handling, and give small teams cleaner operational flow.",
      some_features: ["AI Automation", "Lead Handling", "Workflow Systems"],
      linkLabel: "AI Automation Services"
    }
  ]
}
const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(0);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="tp-sv">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Websites</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Apps</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Under Rs. 10k</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Custom Web Apps</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Landing Pages</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Affordable Websites</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>MVPs</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>SEO Websites</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>AI Automations</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Performance</span>
                    </p>
                    {/* Keep the image shapes at the bottom */}
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="" />
                      </span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={i === 0}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                            <div className="pt-20">
                              <Link href={item.path} className="tp-btn-border-sm">
                                Explore {item.linkLabel}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
