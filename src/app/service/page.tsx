import Service from '@/components/service';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Services"),
  description: pageDescriptions.services,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Services"),
    description: pageDescriptions.services,
    url: buildCanonicalUrl("/service"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Services"),
    description: pageDescriptions.services,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/service"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;