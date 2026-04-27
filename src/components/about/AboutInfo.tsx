
'use client';
import React from 'react';
import Link from 'next/link';
import UseHoverReveal from '@/hooks/UseHoverReveal';

interface DataType {
  title: string;
  bg_img: string;
  href: string;
}

const info_data: DataType[] = [
  { title: "Vibe Coding", bg_img: "/assets/img/about/ab-1.png", href: "/mvp-development-for-startup-founders" },
  { title: "Prompt Engineering", bg_img: "/assets/img/about/ab-2.png", href: "/ai-automation-services-for-small-teams" },
  { title: "AI Automations", bg_img: "/assets/img/about/ab-3.png", href: "/ai-automation-services-for-small-teams" },
  { title: "SEO Strategy", bg_img: "/assets/img/about/ab-4.png", href: "/website-development-services" }
]


const AboutInfo = () => {
  const { handleMouseMove } = UseHoverReveal();
  return (
    <>
      <div id="about-info-area" className="ab-info__area black-bg-3 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ab-info__text">

                <div>
                  I&apos;m Rahul <span className="line"></span> a developer and digital strategist
                  based in India. I focus on building real-world products using
                  modern tech. I love experimenting with

                  {info_data.map((item, index) =>
                    <React.Fragment key={index}>
                      <Link className="tp-hover-reveal-item" href={item.href} onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                        {item.title}
                        <span></span>
                        <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                      </Link>, {' '}
                    </React.Fragment>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
