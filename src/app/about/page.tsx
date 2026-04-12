import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { aboutPageSchema, buildPageMetadata } from '@/data/siteConfig';


export const metadata = buildPageMetadata("about");


const index = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Wrapper>
        <About />
      </Wrapper>
    </>
  );
};

export default index;
