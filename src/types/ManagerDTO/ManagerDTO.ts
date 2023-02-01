export interface UserInfoDto {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export interface MedicineRequestDto {
  manufactureName: string;
  name: string;
  iconUrl: string;
  description: string;
}

export interface ManagerNewsRequestDto {
  title: string;
  content: string;
  type: string;
  endTime: string;
  important: boolean;
  typeOfRequest: ENews;
}

export enum ENews {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}

export interface MedicineResponseDto {
  id: number;
  manufactureName: string;
  name: string;
  iconUrl: string;
  description: string;
  creationDateTime: string;
  lastUpdateDateTime: string;
  createAuthor: UserInfoDto;
  lastUpdateAuthor: UserInfoDto;
}

export interface ManagerNewsResponseDto {
  id: number;
  title: string;
  content: string;
  type: string;
  typeOfRequest: ENews;
  endTime: string;
  published: boolean;
  pictures: string;
  important: boolean;
}
