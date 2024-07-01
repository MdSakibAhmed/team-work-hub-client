// src/Button.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../shared/Button';


describe('Button Component', () => {
  it('renders with the correct label', () => {
    render(<Button label="Add" onClick={() => {}} />);

    // Check if the button contains the correct label text
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();

    render(<Button label="Add" onClick={handleClick} />);

    // Simulate a click event on the button
    fireEvent.click(screen.getByText('Add'));

    // Check if the handleClick function was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
