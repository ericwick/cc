import classname from 'classnames';
import './accordion-body.scss';

export interface AccordionBodyProps {
  active: boolean;
  body?: string;
}

export function AccordionBody(props: AccordionBodyProps) {
  const bodyClassName = classname('accordion__body', {
    'accordion__body--opened': props.active,
    'accordion__body--closed': !props.active,
  });
  // const chevronClassName = classname();

  return (
    <div className={bodyClassName}>
      {props.body ? <p>{props.body}</p> : null}
    </div>
  );
}

export default AccordionBody;
