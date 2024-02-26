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

  // Check if user's name is rendered
  expect(screen.getByText(mockUser.name)).toBeInTheDocument();

  // Check if user's image is rendered
  expect(screen.getByAltText(mockUser.name)).toBeInTheDocument();

  // Check if user's bio is rendered
  expect(screen.getByText(mockUser.bio)).toBeInTheDocument();

  // Check if user's email is rendered
  expect(screen.getByText(mockUser.email)).toBeInTheDocument();
});

test('ProfileInfo animations are applied', async () => {
  render(<ProfileInfo user={mockUser} />);

  // Check if the initial animation state is applied
  expect(screen.getByText(mockUser.name)).toHaveStyle({
    opacity: 0,
    transform: 'translateY(100px)',
  });

  // Wait for the animation to complete
  await new Promise((resolve) => setTimeout(resolve, 300)); // Adjust the time based on your animation duration

  // Check if the final animation state is applied
  expect(screen.getByText(mockUser.name)).toHaveStyle({ opacity: 1, transform: 'translateY(0)' });
});
