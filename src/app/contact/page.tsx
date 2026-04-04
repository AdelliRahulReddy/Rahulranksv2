import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Contact Me"),
  description: pageDescriptions.contact,
  openGraph: buildOpenGraph({
    title: buildPageTitle("Contact Me"),
    description: pageDescriptions.contact,
    url: buildCanonicalUrl("/contact"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("Contact Me"),
    description: pageDescriptions.contact,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/contact"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;