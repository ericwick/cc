import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/react';
import AccordionHeader from '../accordion-header/accordion-header';

const accordionHeader = render(
  <AccordionHeader
    key={0}
    header="test"
    body="test"
    index={0}
    active={false}
    onTitleClick={() => null}
    setActive={() => null}
  />
);

describe('Accordion Header', () => {
  it('should render successfully', () => {
    expect(accordionHeader).toBeTruthy();
  });

  it('should open clicked section based on index', () => {
    // expect(() => userEvent.click(screen.getByRole('button'))).to
    //   expect(accordionHeader).toB
  });

  //   it('should set section to active when clicked', () => {
  //     expect(baseElement);
  //   });
});
