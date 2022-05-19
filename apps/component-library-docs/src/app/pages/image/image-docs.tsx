import { Dropdown } from '@cc/component-library';
import { Icon } from '@cc/component-library';

export default function ImageDocs() {
  const dropdownContent = (
    <div>
      <Icon iconName="Clock" width={4} />
      <Icon iconName="Clock" width={4} />
      <Icon iconName="Clock" width={4} />
      <Icon iconName="Clock" width={4} />
    </div>
  );
  return (
    <div>
      <h1>Dropdowns</h1>
      <p>
        Dropdowns help organize information inside of a toggeable container.
        (eg. navbar) The dropdowns have a similar look and feel to the Accordion
        component but the dropdowns function independently of one another and
        the accordions act in unison (only one open at a time).
      </p>
      <Dropdown
        width={1.3}
        icon="Hashtag"
        title="Example Dropdown"
        content={dropdownContent}
      />
      <Dropdown
        width={1.3}
        icon="Hand"
        title="Example Dropdown 2"
        content={dropdownContent}
      />
      <Dropdown
        width={1.3}
        icon="Home"
        title="Example Dropdown 3"
        content={dropdownContent}
      />
    </div>
  );
}
