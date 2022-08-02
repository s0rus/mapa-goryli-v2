export namespace UserDetails {
  export interface Personals {
    id: string;
    name: string;
    email: string;
    image: string;
    discriminator: string;
    position: UserPosition;
  }

  export interface UserInfo {
    user: Personals;
    expires?: string;
  }

  export interface UserPosition {
    longitude: number;
    latitude: number;
  }
}
