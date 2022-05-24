import { Input } from '@cc/component-library';
import { useState, ChangeEvent } from 'react';

export default function InputsDocs() {
  const [value, setValue] = useState('');
  const [required, setRequired] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleRequired = (e: ChangeEvent<HTMLInputElement>) => {
    setRequired(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <h1>Inputs</h1>
      <p>Text fields allow users to enter and edit text.</p>
      <div>
        <h4>Basic Text Field</h4>
        <p>
          The Input wrapper component is a complete form control including a
          label, an input, and helper text for validation.
        </p>
        <Input
          id="test"
          name="test"
          value={value}
          type="text"
          label="Basic Input"
          placeholder="type something here"
          helperText="This input is a basic input"
          disabled={false}
          required={false}
          readonly={false}
          onChange={handleValue}
        />
      </div>
      <div>
        <h4>Standard Input Attributes</h4>
        <p>
          Standard input attributes are supported (e.g. required, disabled,
          type, etc.) as well as a helperText which is used to give context
          about a field's input, such as how the input will be used.
        </p>
        <Input
          id="disabled"
          name="disabled"
          value=""
          type="text"
          label="Disabled"
          placeholder="Disabled"
          disabled={true}
          helperText="This input is disabled"
        />
        <Input
          id="read-only"
          name="read-only"
          value="Read Only"
          type="text"
          label="Read Only"
          readonly={true}
          helperText="This input is read-only"
        />
        <Input
          id="required"
          name="required"
          value={required}
          type="text"
          label="Required"
          placeholder="Required"
          onChange={handleRequired}
          required={true}
          helperText="This input is required"
        />
        <Input
          id="email"
          name="email"
          value={email}
          type="text"
          label="Email Address"
          placeholder="Enter email address"
          onChange={handleEmail}
          helperText="This input is for email addresses"
        />
        <Input
          id="numbers"
          name="numbers"
          value={number}
          type="number"
          label="Numbers Only"
          placeholder="Enter some numbers"
          onChange={handleNumber}
          helperText="This input is for numbers only"
        />
      </div>
    </div>
  );
}
