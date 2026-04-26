import { permanentRedirect } from 'next/navigation';

const ServiceDetailsRedirectPage = () => {
  permanentRedirect('/service');
};

export default ServiceDetailsRedirectPage;
