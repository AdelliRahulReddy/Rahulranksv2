import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata, contactPageSchema } from '@/data/siteConfig';


export const metadata = buildPageMetadata("contact");


const index = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Wrapper>
        <Contact />
      </Wrapper>
    </>
  );
};

export default index;
