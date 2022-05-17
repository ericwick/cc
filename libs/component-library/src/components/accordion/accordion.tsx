import sass from './accordion.module.scss';

/* eslint-disable-next-line */
export interface AccordionProps {}

export function Accordion(props: AccordionProps) {
  return (
    <div className={sass['accordion']}>
      <h1>Welcome to Accordion!</h1>
    </div>
  );
}

export default Accordion;
