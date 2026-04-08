import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("about");


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;
