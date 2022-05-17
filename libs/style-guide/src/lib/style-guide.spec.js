import { render } from '@testing-library/react';
import StyleGuide from './style-guide';
describe('StyleGuide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyleGuide />);
    expect(baseElement).toBeTruthy();
  });
});
