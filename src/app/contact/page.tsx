import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("contact");


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;
