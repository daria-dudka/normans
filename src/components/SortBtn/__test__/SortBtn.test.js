import { render, screen, fireEvent } from '@testing-library/react';
import SortBtn from './../SortBtn';

describe('SortBtn Component', () => {
  it('renders SortBtn correctly', () => {
    render(<SortBtn />);
    const sortBtn = screen.getByRole('button');
    expect(sortBtn).toBeInTheDocument();
  });

  it('triggers sortUsersList function', () => {
    const sortUsersList = jest.fn();
    render(<SortBtn sortUsersList={sortUsersList} />);
    const sortBtn = screen.getByRole('button');
    fireEvent.click(sortBtn);
    expect(sortUsersList).toHaveBeenCalled();
  });

  it('shows the right text in button', () => {
    const isSorted = true;
    render(<SortBtn isSorted={isSorted} />);
    const sortBtn = screen.getByText('Sort Z-A');
    expect(sortBtn).toBeTruthy();
  });

  it('changes the text while clicked', () => {
    const isSorted = false;
    render(<SortBtn isSorted={isSorted} />);
    const sortBtn = screen.getByText('Sort A-Z');
    fireEvent.click(sortBtn);
    expect(screen.getByText('Sort A-Z')).toBeInTheDocument();
  });
});
