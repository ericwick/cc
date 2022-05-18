import './accordion.scss';
import AccordionHeader from './accordion-header/accordion-header';
import { useState } from 'react';

export interface AccordionProps {
  accordion: AccordionContentProps[];
}

export interface AccordionContentProps {
  title: string;
  body: string;
}

export function Accordion(props: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const onTitleClick = (index: number) => {
    setActiveIndex(index);
    setActive(active);
  };

  const renderedItems = props.accordion.map((e, i) => {
    const active = i === activeIndex ? true : false;
    return (
      <AccordionHeader
        key={i}
        header={e.title}
        body={e.body}
        index={i}
        onTitleClick={onTitleClick}
        setActive={setActive}
        active={active}
      />
    );
  });

  return <div className="accordion">{renderedItems}</div>;
}

export default Accordion;
