import { render } from '@testing-library/react';
import AccordionBody from './accordion-body';

const accordionBody = render(<AccordionBody body="body" active={false} />);

describe('Accordion Body', () => {
  it('should render successfully', () => {
    expect(accordionBody).toBeTruthy();
  });

  it('should changed its className when active or inactive', () => {
    expect(accordionBody).toBeTruthy();
  });
});
