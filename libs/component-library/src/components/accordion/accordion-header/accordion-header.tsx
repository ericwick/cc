import classname from 'classnames';
import Icon from '../../icon/icon';
import AccordionBody from '../accordion-body/accordion-body';

// Accordion Header & Body content
export interface AccordionHeaderProps {
  key: number;
  header?: string;
  index: number;
  onTitleClick: (index: number) => void;
  setActive: (active: boolean) => void;
  active: boolean;
  body?: string;
}

export function AccordionHeader(props: AccordionHeaderProps) {
  const headerClassName = classname('accordion__header', {
    'accordion__header--opened': props.active,
    'accordion__header--closed': !props.active,
  });

  // Activates accordion section
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
