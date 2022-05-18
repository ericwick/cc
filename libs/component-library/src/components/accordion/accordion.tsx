import './accordion.scss';
import AccordionHeader from './accordion-header/accordion-header';

export interface AccordionProps {
  accordion: AccordionContentProps[];
}

export interface AccordionContentProps {
  title: string;
  body: string;
}

export function Accordion(props: AccordionProps) {
  return (
    <div className="accordion">
      {props.accordion.map((e, i) => {
        return <AccordionHeader key={i} header={e.title} body={e.body} />;
      })}
    </div>
  );
}

export default Accordion;
