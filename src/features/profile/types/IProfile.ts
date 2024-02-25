export interface IProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  profileImg: string;
}

export interface IProfileQuery {
  name: string;
  email: string;
  bio: string;
  profileImg: string;
}
