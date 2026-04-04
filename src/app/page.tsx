import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle(),
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
