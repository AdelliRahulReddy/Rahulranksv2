import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PortfolioDetails from '@/components/portfolio-details';
import Wrapper from '@/layouts/Wrapper';
import {
  getAdjacentPortfolioProjects,
  getPortfolioProject,
  portfolioProjects,
} from '@/data/PortfolioProjectsData';
import {
  buildCanonicalUrl,
  buildOpenGraph,
  buildTwitterCard,
} from '@/data/siteConfig';

type PortfolioProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: 'Project | Reddystack',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = buildCanonicalUrl(project.path);

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    openGraph: buildOpenGraph({
      title: project.metaTitle,
      description: project.metaDescription,
      url: canonicalUrl,
    }),
    twitter: buildTwitterCard({
      title: project.metaTitle,
      description: project.metaDescription,
    }),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const PortfolioProjectPage = async ({ params }: PortfolioProjectPageProps) => {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const { previousProject, nextProject } = getAdjacentPortfolioProjects(slug);

  if (!previousProject || !nextProject) {
    notFound();
  }

  return (
    <Wrapper>
      <PortfolioDetails
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </Wrapper>
  );
};

export default PortfolioProjectPage;
