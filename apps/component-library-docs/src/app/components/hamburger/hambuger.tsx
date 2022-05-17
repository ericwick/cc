import { StyledHamburger } from './hamburger.styled';

export interface HamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Hamburger({ open, setOpen }: HamburgerProps) {
  const isExpanded = open ? true : false;
  return (
    <StyledHamburger
      aria-label={isExpanded ? 'Open menu' : 'close menu'}
      open={open}
      aria-expanded={isExpanded}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
}
