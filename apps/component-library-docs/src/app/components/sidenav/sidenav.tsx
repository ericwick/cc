import { useState, useRef } from 'react';
import { Link, To } from 'react-router-dom';
import {
  inputs,
  mobile,
  media,
  buttons,
  dataDisplay,
  navigation,
  layout,
  utilities,
} from '../../pages/index';
import Hamburger from '../hamburger/hambuger';
import { StyledSidenav } from './sidenav.styled';
import { useOnClickOutside } from './menu-hook';
import { Dropdown } from '@cc/component-library';
import './sidenav.scss';

export default function Sidenav() {
  const [open, setOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  const menuId = 'main-menu';
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  useOnClickOutside(menu, () => setOpen(false));

  const linksGenerator = (pages: any[]) => {
    return pages.map((e: { name: string; link: To }, i: number) => {
      return (
        <li key={i}>
          <Link
            to={e.link}
            replace
            className="navbar__link"
            tabIndex={tabIndex}
            onClick={() => setOpen(!open)}
          >
            {e.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <nav ref={menu} className="navbar">
      <Hamburger open={open} setOpen={setOpen} aria-controls={menuId} />
      <StyledSidenav id={menuId} open={open} aria-hidden={!isHidden}>
        <div className="navbar__head">
          <Link
            className="navbar__head--title"
            to="/docs/home"
            replace
            onClick={() => setOpen(!open)}
          >
            cc: Component Library &amp; Style Guide
          </Link>
        </div>
        <Dropdown
          icon="Pencil"
          title="INPUTS"
          width={1.1}
          content={linksGenerator(inputs)}
        />
        <Dropdown
          icon="ViewGrid"
          title="BUTTONS"
          width={1.1}
          content={linksGenerator(buttons)}
        />
        <Dropdown
          icon="Film"
          title="MEDIA"
          width={1.1}
          content={linksGenerator(media)}
        />
        <Dropdown
          icon="Table"
          title="DATA DISPLAY"
          width={1.1}
          content={linksGenerator(dataDisplay)}
        />
        <Dropdown
          icon="Globe"
          title="NAVIGATION"
          width={1.1}
          content={linksGenerator(navigation)}
        />
        <Dropdown
          icon="Template"
          title="LAYOUT"
          width={1.1}
          content={linksGenerator(layout)}
        />
        <Dropdown
          icon="DeviceMobile"
          title="MOBILE"
          width={1.1}
          content={linksGenerator(mobile)}
        />
        <Dropdown
          icon="Cog"
          title="UTILITIES"
          width={1.1}
          content={linksGenerator(utilities)}
        />
      </StyledSidenav>
    </nav>
  );
}
