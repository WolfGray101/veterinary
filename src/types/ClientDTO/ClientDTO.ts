import { PetType } from '../PetsDTO/PetsDTO';

interface Pet {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  petType: PetType,
}

export interface IClient {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  pets: Pet[]
}

export interface ILocalTime {
  hour: number,
  minute: number,
  second: number,
  nano: number,
}
export interface IAppointmentDayElementDto {
  time: ILocalTime,
  available: boolean
}
export interface IAppointmentCalendarElementDto {
  date: string,
  appointments: IAppointmentDayElementDto[]
}
export interface IAppointmentCallendarDto {
  days: IAppointmentCalendarElementDto[]
}
