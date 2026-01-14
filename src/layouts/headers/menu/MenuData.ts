import { StaticImageData } from "next/image";
import demo_img_1 from "@/assets/img/menu/home-1.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: StaticImageData | any;
    mobile_menu?: boolean;
  }[];
}

// Cleaned menu data for Freelancer Theme
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About Me",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Service Details" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog List" },
      { link: "/blog-sidebar", title: "Blog Sidebar" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data;