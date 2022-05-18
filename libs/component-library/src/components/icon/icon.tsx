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
  return (
    <>
      {iconsList.map((e, i): any => {
        let component: any;
        if (props.iconName === e.iconName) {
          component = e.icon;
        }
        return (
          <div key={i} className="icon">
            {component}
          </div>
        );
      })}
    </>
  );
}

export default Icon;
