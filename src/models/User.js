import Base from './Base';

export class User extends Base {}

export function userModelFactory() {
  return new User();
}
