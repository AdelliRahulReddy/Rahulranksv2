import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Service Details"),
  description: pageDescriptions.serviceDetail,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Service Details"),
    description: pageDescriptions.serviceDetail,
    url: buildCanonicalUrl("/service-details"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Service Details"),
    description: pageDescriptions.serviceDetail,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/service-details"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;