/* eslint-disable @typescript-eslint/no-explicit-any */
import './icon.scss';
import icons from './index.jsx';

export interface IconProps {
  iconName: string;
}

export interface IconElement {
  iconName: string;
  icon: any;
}

export function Icon(props: IconProps) {
  const iconsList: IconElement[] = icons;
  let iconComponent: any;

  // eslint-disable-next-line array-callback-return
  iconsList.map((e): any => {
    if (props.iconName === e.iconName) {
      return (iconComponent = e.icon);
    }
  });

  return (
    <div id="icon" aria-label={props.iconName} className="icon">
      {iconComponent ? iconComponent : null}
    </div>
  );
}

export default Icon;
