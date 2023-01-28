import { PetType } from '../PetsDTO/PetsDTO';

interface Pet {
  'id': number,
  'name': 'string',
  'avatar': 'string',
  'birthDay': string,
  'petType': PetType,
}

export interface IClient {
  'firstname': 'string',
  'lastname': 'string',
  'avatar': 'string',
  'email': 'string',
  'pets': Pet[]
}
