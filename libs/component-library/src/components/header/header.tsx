import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  content: any;
}

export function Header(props: HeaderProps) {
  return <header className="header">{props.content}</header>;
}

export default Header;
