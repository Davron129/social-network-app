import * as yup from 'yup';
import {
  PROFILE_FIELD_BIO,
  PROFILE_FIELD_EMAIL,
  PROFILE_FIELD_NAME,
  PROFILE_FIELD_PROFILE_IMG,
} from '../constants';
import { MSG_INVALID_EMAIL, MSG_MAX_LENGTH, MSG_REQUIRED_FIELD } from '@shared/constants';

export const ProfileSchema = yup.object().shape({
  [PROFILE_FIELD_NAME]: yup.string().required(MSG_REQUIRED_FIELD(PROFILE_FIELD_NAME)),
  [PROFILE_FIELD_BIO]: yup
    .string()
    .max(70, MSG_MAX_LENGTH(70))
    .required(MSG_REQUIRED_FIELD(PROFILE_FIELD_BIO)),
  [PROFILE_FIELD_EMAIL]: yup
    .string()
    .email(MSG_INVALID_EMAIL)
    .required(MSG_REQUIRED_FIELD(PROFILE_FIELD_EMAIL)),
  [PROFILE_FIELD_PROFILE_IMG]: yup.string().required(MSG_REQUIRED_FIELD(PROFILE_FIELD_PROFILE_IMG)),
});
