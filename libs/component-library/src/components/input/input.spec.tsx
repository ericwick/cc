import { render } from '@testing-library/react';
import Input from './input';

const { baseElement } = render(<Input />);

describe('Input', () => {
  it('should render successfully', () => {
    expect(baseElement).toBeTruthy();
  });
});
