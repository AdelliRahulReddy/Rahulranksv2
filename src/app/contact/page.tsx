import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildBreadcrumbSchema, buildPageMetadata, contactPageSchema } from '@/data/siteConfig';


export const metadata = buildPageMetadata("contact");


const index = () => {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Wrapper>
        <Contact />
      </Wrapper>
    </>
  );
};

export default index;
