import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ProfileForm } from './ProfileForm';

const mockDefaultValues = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profileImg: 'path/to/image.jpg',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const emptyValues = {
  name: '',
  email: '',
  profileImg: '',
  bio: '',
};

const mockWithInvalidEmail = {
  name: 'John Doe',
  email: 'john.doe@example',
  profileImg: 'path/to/image.jpg',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

jest.mock('framer-motion', () => ({
  motion: {
    div: (props: any) => <div {...props}>{props.children}</div>,
  },
}));

const mockSubmit = jest.fn();

describe('ProfileForm', () => {
  it('renders correctly with default values', () => {
    render(<ProfileForm defaultValues={mockDefaultValues} onExternalSubmit={mockSubmit} />);

    expect(screen.getByPlaceholderText('You Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('A few words about you')).toBeInTheDocument();

    expect(screen.getByDisplayValue(mockDefaultValues.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockDefaultValues.email)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockDefaultValues.bio)).toBeInTheDocument();
  });

  it('submits correctly on button click', async () => {
    render(<ProfileForm defaultValues={mockDefaultValues} onExternalSubmit={mockSubmit} />);

    await act(async () => {
      fireEvent.submit(screen.getByRole('button'));
    });

    expect(mockSubmit).toHaveBeenCalledWith(mockDefaultValues);
  });

  it('shows error texts with empty values on submit', async () => {
    render(<ProfileForm defaultValues={emptyValues} onExternalSubmit={mockSubmit} />);

    await act(async () => {
      fireEvent.submit(screen.getByRole('button'));
    });

    expect(screen.getByText('name field is required'));
    expect(screen.getByText('bio field is required'));
    expect(screen.getByText('email field is required'));
  });

  it('shows error texts with invalid email address on submit', async () => {
    render(<ProfileForm defaultValues={mockWithInvalidEmail} onExternalSubmit={mockSubmit} />);

    await act(async () => {
      fireEvent.submit(screen.getByRole('button'));
    });

    expect(screen.getByText('Please enter valid email address'));
  });
});
