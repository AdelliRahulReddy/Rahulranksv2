
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Contact"),
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;
