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
  }[];
}

const service_content: DataType = {
  subtitle: "Core Services",
  title: <>What <br /> Reddystack Builds</>,
  sm_des: <>Reddystack builds premium websites, mobile apps, MVPs, and automation systems for startups, founders, and growth-focused teams.</>,
  accordion_data: [
    {
      id: 1, tab_id: "One", path: "/service/seo-websites", question: "Premium Websites",
      answer: "We design and build premium marketing websites that look sharp, convert clearly, and launch with strong SEO foundations from day one.",
      some_features: ["Premium Design", "SEO Foundations", "Performance"]
    },
    {
      id: 2, tab_id: "Two", path: "/service/applications", question: "Mobile Apps & MVPs",
      answer: "We turn ideas into launch-ready MVPs and mobile-first product builds with lean scoping, clean flows, and fast execution.",
      some_features: ["MVP Strategy", "Mobile Apps", "Rapid Validation"]
    },
    {
      id: 3, tab_id: "Three", path: "/service/ai-automations", question: "Automations & Internal Tools",
      answer: "We create automation systems and internal tools that remove bottlenecks, connect workflows, and save teams time every week.",
      some_features: ["Internal Tools", "AI Workflows", "Automation Systems"]
    }
  ]
}
const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

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
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Premium Websites</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Mobile Apps</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>MVP Builds</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Automation Systems</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>AI Workflows</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Internal Tools</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Product Strategy</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>SEO Foundations</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Launch Support</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Performance</span>
                    </p>
                    {/* Keep the image shapes at the bottom */}
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="brand-img" />
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
                            className={`accordion-button ${i === 1 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 1 ? 'show' : ''}`}
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
                                Explore Service
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
