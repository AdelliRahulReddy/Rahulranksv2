import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import BrandAreaAbout from '../about/BrandAreaAbout';
import FooterOne from '@/layouts/footers/FooterOne';

import NavigationArea from './NavigationArea';
import ServiceDetailsArea from './ServiceDetailsArea';
import type { ServiceDetail } from '@/data/ServiceDetailData';

type ServiceDetailsProps = {
  service: ServiceDetail;
  previousService: ServiceDetail;
  nextService: ServiceDetail;
};

const ServiceDetails = ({ service, previousService, nextService }: ServiceDetailsProps) => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailsArea service={service} />
            <BrandAreaAbout />
            <NavigationArea previousService={previousService} nextService={nextService} />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
