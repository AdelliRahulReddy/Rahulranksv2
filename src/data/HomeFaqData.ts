export type HomeFaqItem = {
  id: number;
  tab_id: string;
  question: string;
  answer: string;
  some_features: string[];
};

export const homeFaqItems: HomeFaqItem[] = [
  {
    id: 1,
    tab_id: "FaqOne",
    question: "What does Reddystack build?",
    answer:
      "Reddystack builds SEO websites, applications, MVPs, landing pages, and automation systems for startups, founders, and businesses that need practical digital execution.",
    some_features: ["SEO Websites", "Applications", "MVP Builds"],
  },
  {
    id: 2,
    tab_id: "FaqTwo",
    question: "Who is Reddystack best for?",
    answer:
      "The service is best suited for startups, founder-led brands, and growing businesses that want clear scope, premium execution, and leaner delivery without traditional agency overhead.",
    some_features: ["Startups", "Founder-led Brands", "Growing Businesses"],
  },
  {
    id: 3,
    tab_id: "FaqThree",
    question: "Do you work only in Hyderabad?",
    answer:
      "No. Reddystack is based in Hyderabad and works with clients across India and international markets. The delivery model is built to support both local and remote projects.",
    some_features: ["Hyderabad", "India", "Worldwide"],
  },
  {
    id: 4,
    tab_id: "FaqFour",
    question: "How do projects usually start?",
    answer:
      "Projects usually begin with a quick conversation through WhatsApp or the contact form. From there, the work is shaped into a quick fix, a starter package, or a custom quote based on scope.",
    some_features: ["Quick Fix", "Starter Package", "Custom Quote"],
  },
];
