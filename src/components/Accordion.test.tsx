import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title='Hello'>
        <h3>Content</h3>
        <p>Other</p>
      </Accordion>
    );
  });

  test('should always show title', () => {
    expect(screen.getByText(/Hello/i)).toBeDefined();
  });

  test('should not show content at the start', () => {
    expect(screen.queryByText(/Content/i)).toBeNull();
  });

  test('should show the content when button is clicked', () => {
    const button = screen.getByText(/Open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/Content/i)).toBeDefined();
  });

  test('should not show the content when button is dobleclicked', () => {
    const button = screen.getByText(/Open/i);
    fireEvent.dblClick(button);
    expect(screen.queryByText(/Content/i)).toBeNull();
  });
});
