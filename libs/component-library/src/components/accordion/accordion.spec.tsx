import { render } from '@testing-library/react';
import Accordion from './accordion';
import AccordionHeader from './accordion-header/accordion-header';

const accordionExample = [
  {
    title: 'test',
    body: 'test body',
  },
  {
    title: 'test 2',
    body: 'test body 2',
  },
];

const { baseElement } = render(<Accordion accordion={accordionExample} />);

const content = accordionExample.map((e, i) => {
  return (
    <AccordionHeader
      key={0}
      header={e.title}
      body={e.body}
      index={0}
      active={false}
      onTitleClick={() => null}
      setActive={() => null}
    />
  );
});

describe('Accordion', () => {
  it('should render successfully', () => {
    expect(baseElement).toBeTruthy();
  });

  it('should build accordions based on accordion prop', () => {
    expect(content).toBeTruthy();
  });
});
