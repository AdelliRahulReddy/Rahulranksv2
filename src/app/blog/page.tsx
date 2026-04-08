import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("blog");


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;
