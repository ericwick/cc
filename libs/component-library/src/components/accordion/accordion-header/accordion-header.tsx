import './accordion-header.scss';
import AccordionBody from '../accordion-body/accordion-body';
import { useState } from 'react';
import classname from 'classnames';

export interface AccordionHeaderProps {
  key: number;
  header: string;
  body: string;
}

export function AccordionHeader(props: AccordionHeaderProps) {
  const [active, setActive] = useState<boolean>(false);
  const headerClassName = classname('accordion__header', {
    'accordion__header--opened': active,
    'accordion__header--closed': !active,
  });

  return (
    <>
      <button className={headerClassName} onClick={() => setActive(!active)}>
        <p className="accordion__header--title">{props.header}</p>
        <img alt="chevron" />
      </button>
      <AccordionBody active={active} body={props.body} />
    </>
  );
}

export default AccordionHeader;
