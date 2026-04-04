
import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';

export const metadata = {
  title: buildPageTitle("Service Details"),
};


const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
