import { Accordion } from '@cc/component-library';

export default function AccordionDocs() {
  const exampleAccordion = [
    {
      title: 'Example Accordion 1',
      body: 'lorem ipsum 1',
    },
    {
      title: 'Example Accordion 2',
      body: 'lorem ipsum 2',
    },
    {
      title: 'Example Accordion 3',
      body: 'lorem ipsum 3',
    },
  ];

  return (
    <div>
      <h1>Accordions</h1>
      <p>
        The accordion component allows the user to show and hide sections of
        related content on a page
      </p>
      <Accordion accordion={exampleAccordion} />
    </div>
  );
}
