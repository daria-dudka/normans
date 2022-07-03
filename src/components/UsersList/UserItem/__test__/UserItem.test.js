import { render, screen } from '@testing-library/react';
import UserItem from './../UserItem';

const user = [
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

describe('UserItem Component', () => {
  it('renders UserItem correctly', () => {
    render(<UserItem user={user} />);
    const userItem = screen.getByTestId('user-item');
    expect(userItem).toBeInTheDocument();
  });
});
