import { render } from '@testing-library/react';
import AccordionHeader from './accordion-header';

const accordionHeader = render(
  <AccordionHeader
    key={0}
    index={0}
    onTitleClick={() => null}
    setActive={() => null}
    active={false}
  />
);

describe('Accordion Header', () => {
  it('should render successfully', () => {
    expect(accordionHeader).toBeTruthy();
  });

  it('should open clicked section based on index', () => {
    return;
  });

  it('should set section to active when clicked', () => {
    return;
  });
});
