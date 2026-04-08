import { StaticImageData } from 'next/image';
import testimonial_img_1 from '@/assets/img/portfolio/2/portfolio-3.jpg';
import testimonial_img_2 from '@/assets/img/portfolio/2/portfolio-2.jpg';
import testimonial_img_3 from '@/assets/img/portfolio/2/portfolio-1.jpg';
import testimonial_img_4 from '@/assets/img/portfolio/2/portfolio-4.jpg';
import testimonial_img_5 from '@/assets/img/portfolio/2/portfolio-5.jpg';

interface DataType {
  id: number;
  brand_img: StaticImageData;
  brand_tag: string;
  brand_name: string;
  time: number;
}

const testimonial_data: DataType[] = [
  {
    id: 1,
    brand_img: testimonial_img_1,
    brand_tag: 'Developer Tool',
    brand_name: 'GitWall App',
    time: 2025,
  },
  {
    id: 2,
    brand_img: testimonial_img_2,
    brand_tag: 'Content Workflow',
    brand_name: 'ReelsXpress',
    time: 2025,
  },
  {
    id: 3,
    brand_img: testimonial_img_3,
    brand_tag: 'Restaurant Website',
    brand_name: 'Bachelor Brother',
    time: 2024,
  },
  {
    id: 4,
    brand_img: testimonial_img_4,
    brand_tag: 'Brand Platform',
    brand_name: 'Reddystack',
    time: 2026,
  },
  {
    id: 5,
    brand_img: testimonial_img_5,
    brand_tag: 'Automation System',
    brand_name: 'Workflow Stack',
    time: 2026,
  },
];

export default testimonial_data;
