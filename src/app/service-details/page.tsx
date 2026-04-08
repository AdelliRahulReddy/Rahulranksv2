import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("serviceDetail");


const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
