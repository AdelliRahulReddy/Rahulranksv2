import Link from 'next/link';
import React from 'react';

import ServiceArrowIcon from '@/svg/service/ServiceArrowIcon';
import ServiceDevelopmentIcon from '@/svg/service/ServiceDevelopmentIcon';
import ServiceMobileIcon from '@/svg/service/ServiceMobileIcon';
import ServiceSoftwareIcon from '@/svg/service/ServiceSoftwareIcon';
import ServiceWebIcon from '@/svg/service/ServiceWebIcon';
import StarIcon from '@/svg/service/StarIcon';
import { intentLandingPages } from '@/data/IntentLandingPagesData';

interface DataType {
  description: React.JSX.Element;
  service_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
    href: string;
  }[];
}

const getIntentIcon = (relatedServiceSlug: string) => {
  switch (relatedServiceSlug) {
    case 'applications':
      return <ServiceMobileIcon />;
    case 'mvp-builds':
      return <ServiceDevelopmentIcon />;
    case 'ai-automations':
      return <ServiceSoftwareIcon />;
    default:
      return <ServiceWebIcon />;
  }
};

const service_info_content: DataType = {
  description: <>Core build services for businesses that need <br /> launch-ready execution, faster delivery, and <br /> practical digital systems that actually ship.</>,
  service_data: [
    {
      id: 1,
      icon: <ServiceWebIcon />,
      title: 'SEO Websites',
      href: '/service/seo-websites',
    },
    {
      id: 2,
      icon: <ServiceMobileIcon />,
      title: 'Applications',
      href: '/service/applications',
    },
    {
      id: 3,
      icon: <ServiceDevelopmentIcon />,
      title: 'MVP Builds',
      href: '/service/mvp-builds',
    },
    {
      id: 4,
      icon: <ServiceSoftwareIcon />,
      title: 'AI Automations',
      href: '/service/ai-automations',
    },
  ],
};

const { description, service_data } = service_info_content;

const ServiceInfoArea = () => {
  return (
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
                    </span>{' '}
                    Core Services
                  </h4>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="sv-inner__service-category-wrap">
                  {service_data.map((item, i) => (
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
                    </span>{' '}
                    Buyer Intent Pages
                  </h4>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="sv-inner__service-category-wrap">
                  {intentLandingPages.map((page) => (
                    <div key={page.slug} className="sv-inner__service-category">
                      <Link className="d-flex align-items-center justify-content-between" href={page.path}>
                        <div className="sv-inner__service-category-content">
                          <span>
                            {getIntentIcon(page.relatedServiceSlug)}
                          </span>
                          <span>{page.navLabel}</span>
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
  );
};

export default ServiceInfoArea;
