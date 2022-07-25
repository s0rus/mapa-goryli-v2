export namespace UserDetails {
  export interface UserPersonals {
    name: string;
    email: string;
    image: string;
    position: UserPosition;
  }

  export interface UserInfo {
    user: UserPersonals;
    expires?: string;
    userId: string;
  }

  export interface UserPosition {
    longitude: number;
    latitude: number;
  }
}
