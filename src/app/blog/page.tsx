import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Insights"),
};


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;
