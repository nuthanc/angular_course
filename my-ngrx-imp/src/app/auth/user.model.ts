export class UserModel {
  constructor(
    public email: string,
    public id: string,
    public token: string,
    public expiresIn: Date
  ) {}
}
