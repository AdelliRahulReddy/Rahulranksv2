import React from 'react';
import SeviceHeroArea from './SeviceHeroArea';
import ServiceInfoArea from './ServiceInfoArea';
import FooterOne from '@/layouts/footers/FooterOne';
import BrandAreaAbout from '../about/BrandAreaAbout';
import HeaderFour from '@/layouts/headers/HeaderFour';
import PriceAreaHomeOne from '../homes/home/PriceAreaHomeOne';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';


const Service = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <SeviceHeroArea />
            <ServiceAreaHomeOne /> {/* Corrected: Removed style={true} */}
            <ServiceInfoArea />
            <TestimonialAreaHomeOne style={true} />
            <PriceAreaHomeOne style={true} />
            <BrandAreaAbout />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default Service;