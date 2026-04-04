
import PortfolioDetails from '@/components/portfolio-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';


export const metadata = {
  title: buildPageTitle("Portfolio Details"),
};


const index = () => {
  return (
    <Wrapper>
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;
