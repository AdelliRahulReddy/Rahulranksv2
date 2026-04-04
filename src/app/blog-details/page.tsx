import BlogDetails from '@/components/blog-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Blog Details"),
  description: pageDescriptions.blogDetail,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Blog Details"),
    description: pageDescriptions.blogDetail,
    type: "article",
    url: buildCanonicalUrl("/blog-details"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Blog Details"),
    description: pageDescriptions.blogDetail,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/blog-details"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;