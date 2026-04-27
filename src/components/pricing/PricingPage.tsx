import HeaderFour from "@/layouts/headers/HeaderFour";
import FooterOne from "@/layouts/footers/FooterOne";
import PriceAreaHomeOne from "@/components/homes/home/PriceAreaHomeOne";
import ServiceFaqArea from "@/components/service-details/ServiceFaqArea";
import type { ServiceDetail } from "@/data/ServiceDetailData";
import heroWebsite from "@/assets/img/portfolio/port-inner-up-1.jpg";

const pricingFaqService: ServiceDetail = {
  slug: "pricing",
  path: "/pricing",
  subtitle: "Pricing and Scope",
  title: "Pricing and Scope",
  introPrimary:
    "Reddystack pricing depends on scope, page count, content depth, integrations, automation complexity, and launch support. Simple fixed-scope work can stay affordable, while service websites, apps, MVPs, chatbots, and automation systems need a clearer quote before work starts.",
  introSecondary:
    "The goal is honest scope, not vague packages. Every project should define what is included, what is excluded, and what should wait for a later phase.",
  overviewPrimary: "",
  overviewSecondary: "",
  features: [],
  closingSummary: "",
  sideTitle: "",
  categories: ["Website", "SEO", "Apps", "Automation"],
  highlightTitle: ["Pricing", "scope"],
  highlightText: "",
  metaTitle: "Pricing | Website, App, SEO & Automation Scope",
  metaDescription:
    "Review Reddystack starting prices, scope guidance, timelines, and honest limits for websites, apps, SEO-ready pages, MVPs, and AI automation.",
  heroImage: heroWebsite,
  presentation: {
    faqTitle: "Pricing Questions",
    faqDescription:
      "Clear answers about how Reddystack scopes websites, apps, MVPs, SEO-ready pages, and automation work.",
    faqHighlights: ["Starting Prices", "Scope", "Timeline"],
    showFaqShapes: false,
  },
  faqItems: [
    {
      question: "What is the starting price for a Reddystack website?",
      answer:
        "A focused starter website can start at Rs. 9,999 when the scope is limited to a simple one-page build or starter presence. Small business websites usually start from Rs. 14,999, and SEO-ready multi-page builds usually start from Rs. 24,999 depending on content depth and sections.",
      some_features: ["Starter Website", "Scope Limits", "SEO Upgrade"],
    },
    {
      question: "How are app and MVP projects priced?",
      answer:
        "App and MVP pricing depends on screens, user flows, roles, integrations, backend logic, and launch requirements. Small MVP scopes usually start from Rs. 49,999+ after the first useful release is defined.",
      some_features: ["User Flows", "MVP Scope", "Integrations"],
    },
    {
      question: "Do prices include SEO setup?",
      answer:
        "SEO-ready builds can include metadata, heading structure, sitemap, schema, internal links, speed checks, and crawlability basics. Ongoing SEO campaigns or content retainers should be scoped separately.",
      some_features: ["Metadata", "Schema", "Crawlability"],
    },
    {
      question: "Can Reddystack work with clients outside India?",
      answer:
        "Yes. Reddystack is online-first and can work with startups, creators, founders, and small businesses across India and worldwide through a remote-friendly process.",
      some_features: ["India", "Worldwide", "Remote Delivery"],
    },
  ],
};

const PricingPage = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="service-details__area service-details__space pt-200 pb-80 black-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="service-details__title-box mb-40">
                      <span className="service-details__subtitle tp-char-animation">
                        Pricing
                      </span>
      <h1 className="service-details__title tp-char-animation">
                        Pricing for websites, apps, SEO-ready pages, MVPs, chatbots, and automations.
                      </h1>
                    </div>
                  </div>
                  <div className="offset-xl-4 col-xl-5 col-lg-8">
                    <div className="service-details__banner-text">
                      <p className="mb-30 tp_title_anim">
                        Reddystack uses clear scope before price. Fixed starter work can stay
                        lean, but larger websites, apps, MVPs, chatbots, and AI systems need a quote
                        based on the actual pages, workflows, integrations, and launch goals.
                      </p>
                      <p className="tp_title_anim">
                        No package promises ranking guarantees or fake outcomes. The goal is
                        practical delivery, clear inclusions, and a realistic upgrade path.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <PriceAreaHomeOne style={true} />
            <ServiceFaqArea service={pricingFaqService} />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
