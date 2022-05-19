import './dropdown.scss';
import { useState } from 'react';
import Icon from '../icon/icon';
import classname from 'classnames';

export interface DropdownProps {
  title?: string;
  icon?: string;
  width: number;
  content?: JSX.Element | JSX.Element[];
}

export function Dropdown(props: DropdownProps) {
  const [active, setActive] = useState<boolean>(false);

  const contentClassName = classname('dropdown__content', {
    'dropdown__content--opened': active,
    'dropdown__content--closed': !active,
  });

  return (
    <div className="dropdown">
      <button className="dropdown__header" onClick={() => setActive(!active)}>
        <div className="dropdown__header--title">
          <Icon iconName={props.icon} width={props.width} color="#f76c5e" />
          <p className="dropdown__header--title--text">{props.title}</p>
        </div>
        {active ? (
          <Icon iconName="ChevronDown" width={1.5} color="#7a8ab8" />
        ) : (
          <Icon iconName="ChevronRight" width={1.5} color="#7a8ab8" />
        )}
      </button>
      <div className={contentClassName}>{props.content}</div>
    </div>
  );
}

export default Dropdown;
