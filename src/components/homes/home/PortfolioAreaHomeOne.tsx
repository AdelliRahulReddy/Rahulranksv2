"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/portfolio-2.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-3.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-1.jpg";

import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';
import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';

const portfolio_content = {
  subtitle: 'Build-in-Public',
  title: 'Recent Products',
  portfolio_data: [
    {
      id: 1,
      img: portfolio_img_1,
      bg_img: "/assets/img/portfolio/portfolio-2.jpg",
      title: 'Rahulranks Portal',
      category: 'Portal',
      count: '01'
    },
    {
      id: 2,
      img: portfolio_img_2,
      bg_img: "/assets/img/portfolio/portfolio-3.jpg",
      title: 'Bachelors Brother (MVP)',
      category: 'Branding',
      count: '02'
    },
    {
      id: 3,
      img: portfolio_img_3,
      bg_img: "/assets/img/portfolio/portfolio-1.jpg",
      title: "Rahulranks Experiments",
      category: 'Experiments',
      count: '03'
    }
  ]
}
const { subtitle, title, portfolio_data } = portfolio_content

const PortfolioAreaHomeOne = () => {
  // Separating the first project for the featured left-side layout
  const first_project = portfolio_data[0];
  const remaining_projects = portfolio_data.slice(1);

  return (
    <>
      <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
        <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
          <p>{title}</p>
          <p>{title}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-wrapper pr-30 pt-55">
                <div className="tp-section-title-wrapper mb-60">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                </div>

                {/* Featured Project (Left Side) */}
                <div className="tp-portfolio-item-wrapper">
                  <div className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className="tp-portfolio-thumb img-1 w-img fix ">
                        <div className="tp-portfolio-thumb-img ">
                          <Image data-speed="0.85" style={{ objectFit: 'cover', height: "auto" }} src={first_project.img} alt={first_project.title} />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{first_project.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">{first_project.count}</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{first_project.category}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                  <Link href="/portfolio-details"
                    className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                    <span className="tp-btn-circle-text-2">
                      Explore <br /> All Project
                      <span className="tp-btn-circle-arrow-2">
                        <UpArrowIconPortfolio />
                      </span>
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-item-wrapper pl-50">
                {/* Remaining Projects (Right Side) */}
                {remaining_projects.map((item, i) =>
                  <div key={i} className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className="tp-portfolio-thumb img-2 w-img fix">
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: "auto", }} src={item.img} alt={item.title} />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">{item.count}</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.category}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;