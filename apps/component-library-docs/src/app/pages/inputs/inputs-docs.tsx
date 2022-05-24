import { Input } from '@cc/component-library';
import { useState, ChangeEvent } from 'react';

export default function InputsDocs() {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Inputs</h1>
      <p>The input component ...</p>
      <p>
        <Input
          id="test"
          name="tester"
          value={value}
          type="text"
          label="Test Input"
          placeholder="test input"
          disabled={false}
          required={false}
          readonly={false}
          onChange={handleChange}
        />
      </p>
      <Input
        id="disabled"
        name="disabled"
        value="this input is disabled"
        type="text"
        label="Disabled Input"
        placeholder="Disabled input"
        disabled={true}
        required={false}
        readonly={false}
        onChange={handleChange}
      />
    </div>
  );
}
