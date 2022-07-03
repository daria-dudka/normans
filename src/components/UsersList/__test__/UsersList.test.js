import { render, screen } from '@testing-library/react';
import UsersList from './../UsersList';

const usersData = [
  {
    id: 1,
    firstName: 'Andy',
    lastName: 'Jones',
    title: 'Senior Javascript Developer',
    profileImage:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/285.jpg',
    status: 'inactive',
  },
];

describe('UsersList Component', () => {
  it('renders UsersList correctly', () => {
    render(<UsersList users={usersData} />);
    const usersList = screen.getByTestId('users-list');
    expect(usersList).toBeInTheDocument();
  });
});
