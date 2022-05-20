import { useState } from 'react';
import AccordionHeader from './accordion-header/accordion-header';
import './accordion.scss';

// Individual accordion section
export interface AccordionContentProps {
  title?: string;
  body?: string;
}

// Array of all accordion sections
export interface AccordionProps {
  accordion: AccordionContentProps[];
}

export function Accordion(props: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  // Activates accordion section based on index number
  const onTitleClick = (index: number) => {
    setActiveIndex(index);
    setActive(active);
  };

  // Creates unified Accordion from array of accordion sections
  const accordionContent = props.accordion.map((e, i) => {
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

  return <div className="accordion">{accordionContent}</div>;
}

export default Accordion;
