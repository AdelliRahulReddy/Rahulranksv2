

import Service from '@/components/service';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { buildPageTitle } from '@/data/siteConfig';

export const metadata = {
  title: buildPageTitle("Services"),
};

const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;
