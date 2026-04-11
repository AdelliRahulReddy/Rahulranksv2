'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import shape1 from "@/assets/img/portfolio/shape-3.png";
import { getFeaturedPortfolioProjects } from '@/data/PortfolioProjectsData';

const TestimonialAreaHomeTwo = () => {
  const featuredProjects = getFeaturedPortfolioProjects(5);
  const hoverTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef(0);
  const slideCount = featuredProjects.length;

  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs.current[index];

    if (hoverTextRef) {
      const item = hoverTextRef.getBoundingClientRect();
      const x = e.clientX - item.left;
      const y = e.clientY - item.top;

      const children = hoverTextRef.children;
      if (children[0] && children[0].children[2]) {
        (children[0].children[2] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  const [activeIndex, setActiveIndex] = useState<number>(2);

  const shiftActiveIndex = (step: number) => {
    setActiveIndex((prevIndex) => Math.max(0, Math.min(prevIndex + step, slideCount - 1)));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const sensitivity = 50;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    if (Math.abs(deltaX) <= sensitivity) {
      return;
    }

    if ((isRtl && deltaX < 0) || (!isRtl && deltaX > 0)) {
      shiftActiveIndex(1);
      return;
    }

    shiftActiveIndex(-1);
  };

  const getSlideClassName = (index: number) => {
    if (index === activeIndex) {
      return 'active';
    }

    if (index === activeIndex - 1) {
      return 'prev-1';
    }

    if (index === activeIndex - 2) {
      return 'prev-2';
    }

    if (index === activeIndex + 1) {
      return 'next-1';
    }

    if (index === activeIndex + 2) {
      return 'next-2';
    }

    return '';
  };

  return (
    <section className="tp-about-area fix">
      <div className="container container-large">
        <div
          className="tp-about-inner tp-hero-2__space-4 p-relative z-index-1"
          style={{ paddingBottom: '200px' }}
        >
          <span className="tp-about-inner-border transition-3"></span>
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="tp-portfolio-shape">
            <Image className="tp-portfolio-shape-2-1 tp-zoom-in-out" src={shape1} alt="Portfolio accent" />
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-3d-slide-container">
                <span
                  className="tp-3d-slide-arrow tp-3d-slide-arrow-left z-index-9"
                  onClick={() => shiftActiveIndex(-1)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      shiftActiveIndex(-1);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Show previous project"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span
                  className="tp-3d-slide-arrow tp-3d-slide-arrow-right z-index-9"
                  onClick={() => shiftActiveIndex(1)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      shiftActiveIndex(1);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Show next project"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <div
                  className="tp-3d-slide-wrapper"
                  id="tp-3d-slide-wrapper"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {featuredProjects.map((item, index) => (
                    <div
                      key={item.slug}
                      className={`tp-3d-slide tp-hover-reveal-text ${getSlideClassName(index)}`.trim()}
                      ref={(element) => {
                        hoverTextRefs.current[index] = element;
                      }}
                      onMouseMove={(e) => moveText(e, index)}
                    >
                      <Link
                        href={item.path}
                        className="tp-portfolio-item-2 include-bg"
                        style={{
                          backgroundImage: `url(${item.listingImage.src})`,
                        }}
                      >
                        <div className="tp-portfolio-meta-2">
                          <span>{item.category}</span>
                          <span>{item.year}</span>
                        </div>
                        <h3 className="tp-portfolio-title-2">{item.title}</h3>
                        <div className="tp-portfolio-view tp-portfolio-view-btn">
                          <span>View <br /> Work</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaHomeTwo;
