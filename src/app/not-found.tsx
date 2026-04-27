import Error from "@/components/error";
import Wrapper from "@/layouts/Wrapper";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata("notFound");

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default NotFoundPage;
