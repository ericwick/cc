import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import pages from '../../pages/index';
import Hamburger from '../hamburger/hambuger';
import { StyledSidenav } from './sidenav.styled';
import { useOnClickOutside } from './menu-hook';
import './sidenav.scss';

export default function Sidenav() {
  const [open, setOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  const menuId = 'main-menu';
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  useOnClickOutside(menu, () => setOpen(false));
  return (
    <nav ref={menu} className="navbar">
      <Hamburger open={open} setOpen={setOpen} aria-controls={menuId} />
      <StyledSidenav id={menuId} open={open} aria-hidden={!isHidden}>
        {pages.map((e, i) => {
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
        })}
      </StyledSidenav>
    </nav>
  );
}
