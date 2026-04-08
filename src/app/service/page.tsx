import Service from '@/components/service';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("services");


const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;
