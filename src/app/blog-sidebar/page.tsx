import BlogSidebar from '@/components/blog-sidebar';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Insights"),
  description: pageDescriptions.blog,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Insights"),
    description: pageDescriptions.blog,
    url: buildCanonicalUrl("/blog-sidebar"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Insights"),
    description: pageDescriptions.blog,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/blog-sidebar"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <BlogSidebar />
    </Wrapper>
  );
};

export default index;