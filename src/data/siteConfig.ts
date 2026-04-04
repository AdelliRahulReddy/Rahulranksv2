export const siteConfig = {
  brandName: "Rahulranks",
  ownerName: "Rahul Reddy Adelli",
  titleSuffix: "Rahul Reddy Adelli - Rahulranks",
  email: "adellirahulreddy@gmail.com",
  phoneDisplay: "+91 7032784208",
  phoneHref: "+917032784208",
  location: "India",
  mapUrl: "https://www.google.com/maps/search/India",
  socialLinks: {
    email: "mailto:adellirahulreddy@gmail.com",
    google: "https://www.google.com/search?q=Rahulranks",
    behance: "https://www.behance.net/rahulranks",
    instagram: "https://www.instagram.com/rahul_ranks/",
    youtube: "https://www.youtube.com/results?search_query=Rahulranks",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Rahulranks",
  },
  stats: {
    projectsCompleted: 6,
    yearsOfExperience: 6,
    clientSatisfaction: 100,
  },
} as const;

export const buildPageTitle = (page?: string) =>
  page ? `${page} - ${siteConfig.titleSuffix}` : siteConfig.titleSuffix;
