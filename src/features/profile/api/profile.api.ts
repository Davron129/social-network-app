import { BaseApi } from 'configs/axios';
import { ENDPOINT_PROFILE } from '../endpoints';
import { IProfile } from '../types';

export class ProfileApi extends BaseApi {
  constructor() {
    super();
  }

  fetchProfile(): Promise<IProfile> {
    return this.httpClient.get(ENDPOINT_PROFILE).then((response) => response.data);
  }
}

export const profileApi = new ProfileApi();
