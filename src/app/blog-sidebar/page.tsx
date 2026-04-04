
import BlogSidebar from '@/components/blog-sidebar';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Insights"),
};


const index = () => {
  return (
    <Wrapper>
      <BlogSidebar />
    </Wrapper>
  );
};

export default index;
