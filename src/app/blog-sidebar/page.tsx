import BlogSidebar from '@/components/blog-sidebar';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("blogSidebar");


const index = () => {
  return (
    <Wrapper>
      <BlogSidebar />
    </Wrapper>
  );
};

export default index;
