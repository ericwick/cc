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
      <Input
        id="test"
        name="tester"
        value={value}
        type="text"
        placeholder="test input"
        disabled={false}
        required={false}
        readonly={false}
        onChange={handleChange}
      />
    </div>
  );
}
