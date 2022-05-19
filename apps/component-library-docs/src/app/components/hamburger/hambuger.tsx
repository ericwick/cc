import './hamburger.scss';
import { Icon } from '@cc/component-library';

export interface HamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Hamburger({ open, setOpen }: HamburgerProps) {
  const isExpanded = open ? true : false;

  return (
    <button
      aria-label={isExpanded ? 'Open menu' : 'close menu'}
      onClick={() => setOpen(!open)}
      aria-expanded={isExpanded}
      className="hamburger-menu"
    >
      <Icon iconName="Menu" width={2.3} color="#182139" />
    </button>
  );
}
