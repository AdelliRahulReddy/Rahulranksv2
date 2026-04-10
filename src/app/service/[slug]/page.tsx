import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import {
  getAdjacentServices,
  getServiceDetail,
  serviceDetailData,
} from '@/data/ServiceDetailData';
import {
  buildCanonicalUrl,
  buildOpenGraph,
  buildTwitterCard,
} from '@/data/siteConfig';

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceDetailData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return {
      title: 'Service | Reddystack',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = buildCanonicalUrl(service.path);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: buildOpenGraph({
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
    }),
    twitter: buildTwitterCard({
      title: service.metaTitle,
      description: service.metaDescription,
    }),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  const { previousService, nextService } = getAdjacentServices(slug);

  if (!previousService || !nextService) {
    notFound();
  }

  return (
    <Wrapper>
      <ServiceDetails
        service={service}
        previousService={previousService}
        nextService={nextService}
      />
    </Wrapper>
  );
};

export default ServiceDetailPage;
