import classname from 'classnames';

// Body contents passed from Accordion Header
export interface AccordionBodyProps {
  active: boolean;
  body?: string;
}

export function AccordionBody(props: AccordionBodyProps) {
  const bodyClassName = classname('accordion__body', {
    'accordion__body--opened': props.active,
    'accordion__body--closed': !props.active,
  });

  return (
    <div className={bodyClassName}>
      {props.body ? <p>{props.body}</p> : null}
    </div>
  );
}

export default AccordionBody;
