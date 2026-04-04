import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Home"),
  description: pageDescriptions.home,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Home"),
    description: pageDescriptions.home,
    url: buildCanonicalUrl("/"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Home"),
    description: pageDescriptions.home,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/"),
  },
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
