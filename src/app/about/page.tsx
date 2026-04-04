import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("About Me"),
  description: pageDescriptions.about,
  openGraph: buildOpenGraph({
    title: buildPageTitle("About Me"),
    description: pageDescriptions.about,
    url: buildCanonicalUrl("/about"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("About Me"),
    description: pageDescriptions.about,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/about"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;