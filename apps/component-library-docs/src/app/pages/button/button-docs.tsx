import { Button } from '@cc/component-library';

export default function ButtonDocs() {
  return (
    <div>
      <h1>Buttons</h1>
      <p>
        Buttons allow users to take actions, and make choices with a single tap.
      </p>
      <h1>Base Style</h1>
      <Button onClick={() => null} content="base button" />
      <Button onClick={() => null} content="disabled" disabled={true} />
      <Button
        onClick={() => null}
        content="full width button"
        fullWidth={true}
      />
      <Button onClick={() => null} content="small" size="small" />
      <Button onClick={() => null} content="large" size="large" />
      <h1>Variants</h1>
    </div>
  );
}
