import PortfolioDetails from '@/components/portfolio-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Portfolio Details"),
  description: pageDescriptions.portfolioDetail,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Portfolio Details"),
    description: pageDescriptions.portfolioDetail,
    url: buildCanonicalUrl("/portfolio-details"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Portfolio Details"),
    description: pageDescriptions.portfolioDetail,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/portfolio-details"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;