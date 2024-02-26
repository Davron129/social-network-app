import { render, screen } from '@testing-library/react';
import { ProfileInfo } from './ProfileInfo';
import { IProfile } from '@features/profile/types';

const mockUser: IProfile = {
  id: '100',
  name: 'John Doe',
  profileImg:
    'https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034957463?e=2147483647&v=beta&t=0SFHyDkPN7RGKIO0VEy33a6KrtluAN3aAvxkL2dbHSM',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  email: 'john.doe@example.com',
};

test('ProfileInfo renders correctly with user data', () => {
  render(<ProfileInfo user={mockUser} />);

  expect(screen.getByText(mockUser.name)).toBeInTheDocument();

  expect(screen.getByAltText(mockUser.name)).toBeInTheDocument();

  expect(screen.getByText(mockUser.bio)).toBeInTheDocument();

  expect(screen.getByText(mockUser.email)).toBeInTheDocument();
});
