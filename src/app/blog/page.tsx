import BlogSidebar from '@/components/blog-sidebar';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildBreadcrumbSchema, buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("blog");


const index = () => {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Wrapper>
        <BlogSidebar />
      </Wrapper>
    </>
  );
};

export default index;
