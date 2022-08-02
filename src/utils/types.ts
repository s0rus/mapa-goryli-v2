export namespace UserDetails {
  export interface Personals {
    id: string;
    name: string;
    email: string;
    image: string;
    discriminator: string;
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
