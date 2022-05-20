import { render } from '@testing-library/react';
import Accordion from './accordion';

const accordionProps = [
  {
    title: 'test',
    body: 'test body',
  },
  {
    title: 'test 2',
    body: 'test body 2',
  },
];

const accordion = render(<Accordion accordion={accordionProps} />);

describe('Accordion', () => {
  it('should render successfully', () => {
    expect(accordion).toBeTruthy();
    return;
  });

  it('should build accordions based on accordion prop', () => {
    return;
  });
});
