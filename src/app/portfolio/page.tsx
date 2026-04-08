import Portfolio from '@/components/portfolio';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("portfolio");


const index = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default index;
