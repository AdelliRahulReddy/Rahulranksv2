
'use client';
import React from 'react';
import UseHoverReveal from '@/hooks/UseHoverReveal';

interface DataType {
  title: string;
  bg_img: string;
}

const info_data: DataType[] = [
  { title: "SEO Strategy", bg_img: "/assets/img/about/ab-1.png" },
  { title: "Next.js Development", bg_img: "/assets/img/about/ab-2.png" },
  { title: "AI Automations", bg_img: "/assets/img/about/ab-3.png" },
  { title: "Digital Marketing", bg_img: "/assets/img/about/ab-4.png" }
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
                  I'm Rahul <span className="line"></span> a developer and digital strategist
                  based in India. I focus on building real-world products using
                  modern tech. I love experimenting with

                  {info_data.map((item, index) =>
                    <React.Fragment key={index}>
                      <a className="tp-hover-reveal-item" href="#" onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                        {item.title}
                        <span></span>
                        <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                      </a>, {' '}
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