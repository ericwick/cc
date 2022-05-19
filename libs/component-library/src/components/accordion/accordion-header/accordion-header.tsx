import classname from 'classnames';
import Icon from '../../icon/icon';
import AccordionBody from '../accordion-body/accordion-body';

export interface AccordionHeaderProps {
  key: number;
  header?: string;
  body?: string;
  index: number;
  onTitleClick: (index: number) => void;
  setActive: (active: boolean) => void;
  active: boolean;
}

export function AccordionHeader(props: AccordionHeaderProps) {
  const headerClassName = classname('accordion__header', {
    'accordion__header--opened': props.active,
    'accordion__header--closed': !props.active,
  });

  const onHeaderClick = () => {
    props.onTitleClick(props.index);
    props.setActive(!props.active);
  };

  return (
    <>
      <button className={headerClassName} onClick={() => onHeaderClick()}>
        <p className="accordion__header--title">{props.header}</p>
        {props.active ? (
          <Icon iconName="ChevronDown" />
        ) : (
          <Icon iconName="ChevronRight" />
        )}
      </button>
      <AccordionBody active={props.active} body={props.body} />
    </>
  );
}

export default AccordionHeader;
