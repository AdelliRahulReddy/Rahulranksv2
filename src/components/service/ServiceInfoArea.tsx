import Link from 'next/link';
import ServiceArrowIcon from '@/svg/service/ServiceArrowIcon';
import ServiceBrandingIcon from '@/svg/service/ServiceBrandingIcon';
import ServiceDevelopmentIcon from '@/svg/service/ServiceDevelopmentIcon';
import ServiceMobileIcon from '@/svg/service/ServiceMobileIcon';
import ServiceSoftwareIcon from '@/svg/service/ServiceSoftwareIcon';
import ServiceUiIcon from '@/svg/service/ServiceUiIcon';
import ServiceWebIcon from '@/svg/service/ServiceWebIcon';
import StarIcon from '@/svg/service/StarIcon';
import React from 'react';


interface DataType {
  description: React.JSX.Element;
  design_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
    href: string;
  }[];
  development_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
    href: string;
  }[];
}

const service_info_content: DataType = {
  description: <>AI-powered websites, apps, and automations <br /> strategically built to tell your story, make <br /> a connection, and deliver real results online.</>,
  design_data: [
    {
      id: 1,
      icon: <ServiceWebIcon />,
      title: "SEO Websites",
      href: "/service/seo-websites",
    },
    {
      id: 2,
      icon: <ServiceUiIcon />,
      title: "UI/UX Design",
      href: "/service/mobile-apps",
    },
    {
      id: 3,
      icon: <ServiceMobileIcon />,
      title: "App Design",
      href: "/service/mobile-apps",
    },
    {
      id: 4,
      icon: <ServiceBrandingIcon />,
      title: "Brand Identity",
      href: "/service/seo-websites",
    },

  ],
  development_data: [
    {
      id: 1,
      icon: <ServiceDevelopmentIcon />,
      title: "Vibe Coding",
      href: "/service/mvp-building",
    },
    {
      id: 2,
      icon: <ServiceSoftwareIcon />,
      title: "AI Automations",
      href: "/service/ai-automations",
    },
    {
      id: 3,
      icon: <ServiceMobileIcon />,
      title: "MVP Building",
      href: "/service/mvp-building",
    },
    {
      id: 4,
      icon: <ServiceBrandingIcon />,
      title: "Prompt Engineering",
      href: "/service/ai-automations",
    },


  ],
}

const { description, design_data, development_data } = service_info_content


const ServiceInfoArea = () => {
  return (
    <>
      <div className="sv-inner__info-area pt-120 pb-90 black-bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="sv-inner__info-title-box mb-90">
                <h4 className="sv-inner__info-title tp_title_anim">
                  {description}
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="row mb-100">
                <div className="col-xl-4">
                  <div className="sv-inner__info-service">
                    <h4 className="sv-inner__left-title">
                      <span>
                        <StarIcon />
                      </span> {' '}
                      Design
                    </h4>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="sv-inner__service-category-wrap">

                    {design_data.map((item, i) => (
                      <div key={i} className="sv-inner__service-category">
                        <Link className="d-flex align-items-center justify-content-between" href={item.href}>
                          <div className="sv-inner__service-category-content">
                            <span>
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <div className="sv-inner__service-category-link">
                            <span>
                              <ServiceArrowIcon />
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4">
                  <div className="sv-inner__info-service">
                    <h4 className="sv-inner__left-title">
                      <span>
                        <StarIcon />
                      </span> {' '}
                      Development
                    </h4>
                  </div>
                </div>
                <div className="col-xl-8">

                  <div className="sv-inner__service-category-wrap">
                    {development_data.map((item, i) => (
                      <div key={i} className="sv-inner__service-category">
                        <Link className="d-flex align-items-center justify-content-between" href={item.href}>
                          <div className="sv-inner__service-category-content">
                            <span>
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <div className="sv-inner__service-category-link">
                            <span>
                              <ServiceArrowIcon />
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInfoArea;
