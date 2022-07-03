import { render, screen, fireEvent } from '@testing-library/react';
import NewUserForm from './../NewUserForm';

describe('NewUserForm Component', () => {
  it('renders NewUserForm correctly', () => {
    render(<NewUserForm />);
    const newUserForm = screen.getByTestId('user-form');
    expect(newUserForm).toBeInTheDocument();
  });

  describe('Inputs', () => {
    it('renders 4 inputs in NewUserForm', () => {
      render(<NewUserForm />);
      const inputs = screen.getAllByRole('textbox');
      expect(inputs.length).toBe(4);
    });

    it('updates Input on change', () => {
      render(<NewUserForm />);
      const firstName = screen.getByLabelText('First Name');
      fireEvent.change(firstName, { target: { value: 'test' } });
      expect(firstName.value).toBe('test');
    });
  });
  describe('Submit button', () => {
    it('triggers submitHandler function', () => {
      const getNewUsersData = jest.fn();

      render(<NewUserForm getNewUsersData={getNewUsersData} />);

      const btnSubmit = screen.getByText('Add New User');

      fireEvent.click(btnSubmit);
      expect(getNewUsersData).toHaveBeenCalled();
    });
  });
});
