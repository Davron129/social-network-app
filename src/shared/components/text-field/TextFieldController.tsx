import clsx from 'clsx';
import { FC, useId } from 'react';
import { Control, Controller } from 'react-hook-form';

interface TextFieldControllerProps {
  control: Control<any>;
  name: string;
  disabled?: boolean;
  placeholder?: string;
}

export const TextFieldController: FC<TextFieldControllerProps> = ({
  control,
  name,
  disabled,
  placeholder,
}) => {
  const id = useId();

  // classes for input variants
  const inputClasses = clsx({
    'w-full bg-transparent outline-none text-white text-sm': true,
  });

  return (
    <>
      <Controller
        render={({ field }) => (
          <>
            <input
              id={id}
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              className={inputClasses}
            />
          </>
        )}
        name={name}
        control={control}
        defaultValue=""
      />
    </>
  );
};
