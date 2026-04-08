import BlogSidebar from '@/components/blog-sidebar';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Insights"),
  description: pageDescriptions.blog,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: buildOpenGraph({
    title: buildPageTitle("Insights"),
    description: pageDescriptions.blog,
    url: buildCanonicalUrl("/blog"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Insights"),
    description: pageDescriptions.blog,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/blog"),
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
