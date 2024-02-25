import { forwardRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldErrors, useForm } from 'react-hook-form';
import {
  PROFILE_FIELD_BIO,
  PROFILE_FIELD_EMAIL,
  PROFILE_FIELD_NAME,
} from '@features/profile/constants';
import { ProfileSchema } from '@features/profile/schemas';
import { IProfileQuery } from '@features/profile/types';
import { TextFieldController } from '@shared/components';

interface Props {
  defaultValues: IProfileQuery;
  onExternalSubmit: (values: IProfileQuery) => void;
}

export const ProfileForm = forwardRef<HTMLButtonElement, Props>(
  ({ defaultValues, onExternalSubmit }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(ProfileSchema),
      mode: 'onBlur',
      defaultValues,
    });

    const onValid = (values: IProfileQuery) => {
      console.log(values);
      onExternalSubmit(values);
    };

    const onInvalid = (errors: FieldErrors) => {
      console.log('onInvalid', errors);
    };

    const onSubmit = handleSubmit(onValid, onInvalid);

    return (
      <form className="max-w-[600px] mx-auto" onSubmit={onSubmit}>
        <div className="mb-5">
          <div className="px-4 bg-primary rounded-lg flex gap-x-3">
            <div className="h-[60px] w-[60px] my-4 rounded-full bg-secondary flex-2 overflow-hidden aspect-square">
              <img
                src={defaultValues.profileImg}
                alt={defaultValues.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="divide-y divide-secondary flex-1 flex flex-col">
              <div className="flex-1 flex items-center">
                <TextFieldController
                  control={control}
                  placeholder="You Name"
                  name={PROFILE_FIELD_NAME}
                />
              </div>
              <div className="flex-1 flex items-center">
                <TextFieldController
                  control={control}
                  placeholder="Your Email"
                  name={PROFILE_FIELD_EMAIL}
                />
              </div>
            </div>
          </div>
          <div className="px-4 mt-2">
            {(errors.name || errors.email) && (
              <>
                <p className="text-xs text-red-500 text-red">{errors.name?.message}</p>
                <p className="text-xs text-red-500 text-red">{errors.email?.message}</p>
              </>
            )}
            <p className="text-xs text-muted">Enter you name, username and a profile photo</p>
          </div>
        </div>

        <div>
          <div className="px-4 mb-2">
            <span className="text-xs text-muted">BIO</span>
          </div>

          <div className="bg-primary px-4 py-3 rounded-lg">
            <TextFieldController
              control={control}
              placeholder="A few words about you"
              name={PROFILE_FIELD_BIO}
            />
          </div>
          {errors.bio && (
            <div className="mt-2 px-4">
              <p className="text-xs text-red-500 text-red">{errors.bio?.message}</p>
            </div>
          )}
        </div>
        <button type="submit" className="hidden" ref={ref}></button>
      </form>
    );
  },
);

ProfileForm.displayName = 'ProfileForm';
