import { render, screen, fireEvent } from '@testing-library/react';
import DeleteBtn from './../DeleteBtn';

describe('DeleteBtn Component', () => {
  it('renders DeleteBtn correctly', () => {
    render(<DeleteBtn />);
    const deleteBtn = screen.getByRole('button');
    expect(deleteBtn).toBeInTheDocument();
  });

  it('triggers getClickedUserId function', () => {
    const getClickedUserId = jest.fn();
    render(<DeleteBtn getClickedUserId={getClickedUserId} />);
    const deleteBtn = screen.getByRole('button');
    fireEvent.click(deleteBtn);
    expect(getClickedUserId).toHaveBeenCalled();
  });
});
