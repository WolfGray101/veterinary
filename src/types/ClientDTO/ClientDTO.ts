type Pet = {
  'id': number,
  'name': 'string',
  'avatar': 'string',
  'birthDay': '2023-01-26',
  'petType': 'CAT'
};

export interface IClient {
  'firstname': 'string',
  'lastname': 'string',
  'avatar': 'string',
  'email': 'string',
  'pets': Pet[]
}
