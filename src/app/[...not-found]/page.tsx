import Error from "@/components/error";
import Wrapper from "@/layouts/Wrapper";
import { buildPageTitle } from "@/data/siteConfig";

 
 
export const metadata = {
  title: buildPageTitle("404"),
};
const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;
