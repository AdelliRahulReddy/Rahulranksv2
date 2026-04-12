'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";
import { homeFaqItems } from '@/data/HomeFaqData';

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
}

const faq_content: DataType = {
  subtitle: "FAQs",
  title: <>Common <br /> Questions</>,
  sm_des: <>Clear answers for founders and businesses exploring websites, apps, MVPs, and automations with Reddystack.</>,
};

const { subtitle, title, sm_des } = faq_content;

const FaqAreaHomeOne = () => {
  const [active, setActive] = useState(0);

  const handleItemClick = (index: number) => {
    setActive(index);
  };

  return (
    <section className="tp-services-area tp-services-bg-text-animation fix">
      <div className="container container-large">
        <div className="tp-services-inner pb-195 p-relative z-index-1">
          <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
          <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

          <div className="tp-services-bottom-text tp-services-bg-text">
            <p>Questions</p>
          </div>

          <div className="row gx-0">
            <div className="col-xl-6 col-lg-7">
              <div
                className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70"
                style={{ paddingTop: "100px" }}
                data-tp-throwable-scene="true"
              >
                <div className="tp-section-title-wrapper tp_text_anim mb-170">
                  <div className="tp-section-title-inner p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                  <p>{sm_des}</p>
                </div>

                <div className="tp-services-capsule-item-wrapper">
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Founder-led</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Affordable Packages</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Hyderabad Based</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>India + Global</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>SEO-ready Builds</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Apps & MVPs</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Automations</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Custom Quotes</span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="">
                      <Image src={shape_1} alt="faq shape one" />
                    </span>
                  </p>
                  <p data-tp-throwable-el="">
                    <span className="">
                      <Image src={shape_2} alt="faq shape two" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-5">
              <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                <span className="tp-services-accordion-border"></span>
                <div className="accordion" id="faqAccordionHome">
                  {homeFaqItems.map((item, i) => (
                    <div
                      key={item.tab_id}
                      onClick={() => handleItemClick(i)}
                      className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}
                    >
                      <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                        <button
                          className={`accordion-button ${i === 0 ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.tab_id}`}
                          aria-expanded={`${i === 0 ? 'true' : 'false'}`}
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
                        data-bs-parent="#faqAccordionHome"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                          <ul>
                            {item.some_features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
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
  );
};

export default FaqAreaHomeOne;
