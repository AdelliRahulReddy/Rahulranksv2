import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageMetadata, homePageSchema } from '@/data/siteConfig';


export const metadata = buildPageMetadata("home");

const MainHome = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Wrapper>
        <HomeOne />
      </Wrapper>
    </>
  );
};

export default MainHome;
