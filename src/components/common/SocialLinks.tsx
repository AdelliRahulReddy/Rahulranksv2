import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import InstagramIcon from "@/svg/icons/InstagramIcon";
import TelegramIcon from "@/svg/icons/TelegramIcon";
import XIcon from "@/svg/icons/XIcon";

import type { JSX } from "react";

// hero 01 social links
interface HeroDataType {
  id: number;
  link: string;
  icon: JSX.Element;
}

const hero_social_data: HeroDataType[] = [
  {
    id: 1,
    link: siteConfig.socialLinks.instagram,
    icon: <InstagramIcon />,
  },
  {
    id: 2,
    link: siteConfig.socialLinks.x,
    icon: <XIcon />,
  },
  {
    id: 3,
    link: siteConfig.socialLinks.telegram,
    icon: <TelegramIcon />,
  }
]

export const HeroSocialLinks = () => {
  return (
    <>
      {hero_social_data.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          target="_blank">
          {h_item.icon}
        </Link>
      ))}
    </>
  )
}

// copy right text 
type copy_right_text_type = {
  copy_right?: JSX.Element;
  copy_rigth_2?: string;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
    © {new Date().getFullYear()} Rahul Reddy, All Rights Reserved
  </>,
  copy_rigth_2: `Reddystack © ${new Date().getFullYear()}. All rights reserved.`
}

const { copy_right, copy_rigth_2 } = copy_right_text
export const CopyRight = ({ style_2 }: any) => {
  return (
    <> {style_2 ? copy_rigth_2 : copy_right}</>
  )
}
