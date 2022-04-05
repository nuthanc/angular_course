export class UserModel {
  constructor(
    private email: string,
    private id: string,
    private expiresIn: Date
  ) {}
}
