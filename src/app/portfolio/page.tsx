import Portfolio from '@/components/portfolio';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Portfolio"),
  description: pageDescriptions.portfolio,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Portfolio"),
    description: pageDescriptions.portfolio,
    url: buildCanonicalUrl("/portfolio"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Portfolio"),
    description: pageDescriptions.portfolio,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/portfolio"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default index;