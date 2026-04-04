import Error from "@/components/error";
import Wrapper from "@/layouts/Wrapper";
import { buildPageTitle, pageDescriptions, buildOpenGraph, buildTwitterCard, buildCanonicalUrl } from "@/data/siteConfig";


export const metadata = {
  title: buildPageTitle("404 - Page Not Found"),
  description: pageDescriptions.notFound,
  openGraph: buildOpenGraph({
    title: buildPageTitle("404 - Page Not Found"),
    description: pageDescriptions.notFound,
    url: buildCanonicalUrl("/404"),
  }),
  twitter: buildTwitterCard({
    title: buildPageTitle("404 - Page Not Found"),
    description: pageDescriptions.notFound,
  }),
  alternates: {
    canonical: buildCanonicalUrl("/404"),
  },
};


const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;