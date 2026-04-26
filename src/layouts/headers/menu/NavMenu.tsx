import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu_data from './MenuData';


const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, index) => (
          <li className={`${item.has_dropdown || item.img_dropdown ? 'has-dropdown' : ''}`} key={index}>
            <Link href={item.link}>{item.title}</Link>

            {item.has_dropdown &&
              <ul className="tp-submenu submenu">
                {item.sub_menus?.map((sub_menu, sub_index) => (
                  <li key={sub_index}><Link href={sub_menu.link}>{sub_menu.title}</Link></li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;