import HeaderFour from "@/layouts/headers/HeaderFour";
import FooterOne from "@/layouts/footers/FooterOne";
import type { TrustPageData } from "@/data/TrustPagesData";

type TrustPageProps = {
  page: TrustPageData;
};

const TrustPage = ({ page }: TrustPageProps) => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="service-details__area service-details__space pt-200 pb-120 black-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="service-details__title-box mb-40">
                      <span className="service-details__subtitle tp-char-animation">
                        {page.subtitle}
                      </span>
                      <h1 className="service-details__title tp-char-animation">
                        {page.title}
                      </h1>
                    </div>
                  </div>
                  <div className="offset-xl-4 col-xl-7 col-lg-9">
                    <div className="service-details__banner-text mb-80">
                      <p className="tp_title_anim">{page.intro}</p>
                    </div>
                    <div className="service-details__left-wrap">
                      {page.sections.map((section) => (
                        <section key={section.title} className="service-details__left-text pb-20">
                          <h2 className="tp-section-title-3 mb-25">{section.title}</h2>
                          {section.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default TrustPage;
