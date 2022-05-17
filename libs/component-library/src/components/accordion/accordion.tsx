import { useState } from 'react';
import classname from 'classnames';
import './accordion.scss';

/* eslint-disable-next-line */
export interface AccordionProps {
  title: string;
  body: string;
}

export function Accordion(props: AccordionProps) {
  const [active, setActive] = useState(false);
  const headerClassName = classname('accordion__header', {
    'accordion__header--opened': active,
    'accordion__header--closed': !active,
  });
  const bodyClassName = classname('accordion__body', {
    'accordion__body--opened': active,
    'accordion__body--closed': !active,
  });
  // const chevronClassName = classname();

  return (
    <div className="accordion">
      <button className={headerClassName} onClick={() => setActive(!active)}>
        <p className="accordion__header--title">{props.title}</p>
        <img alt="chevron" />
      </button>
      <div className={bodyClassName}>
        <p className="accordion__body--content">{props.body}</p>
      </div>
    </div>
  );
}

export default Accordion;
