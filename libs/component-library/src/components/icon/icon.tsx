/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './icon.scss';
import icons from './index.jsx';

export interface IconProps {
  iconName?: string;
  width?: number;
  color?: string;
}

export interface IconElement {
  iconName: string;
  icon: any;
}

export function Icon(props: IconProps) {
  const iconsList: IconElement[] = icons;
  let iconComponent: any;

  iconsList.map(e => {
    if (props.iconName === e.iconName) {
      return (iconComponent = e.icon);
    }
  });

  return (
    <div
      id="icon"
      style={{ width: `${props.width}rem`, color: `${props.color}` }}
      aria-label={props.iconName}
      className="icon"
    >
      {iconComponent ? iconComponent : null}
    </div>
  );
}

export default Icon;
