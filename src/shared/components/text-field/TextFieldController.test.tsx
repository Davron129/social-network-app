import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { TextFieldController } from './TextFieldController';

describe('TextFieldController', () => {
  it('renders input element with name', () => {
    const Component = () => {
      const { control } = useForm();

      return <TextFieldController control={control} name="name" />;
    };

    render(<Component />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input).toBeVisible();
    expect(input.name).toBe('name');
  });

  it('should render a disabled input', () => {
    const Component = () => {
      const { control } = useForm();

      return <TextFieldController control={control} name="name" disabled />;
    };

    render(<Component />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input).toBeDisabled();
  });

  it('should render input with right placeholder', () => {
    const Component = () => {
      const { control } = useForm();

      return <TextFieldController control={control} name="name" placeholder="Your name" />;
    };

    render(<Component />);

    const input = screen.getByPlaceholderText('Your name');

    expect(input).toBeInTheDocument();
  });
});
