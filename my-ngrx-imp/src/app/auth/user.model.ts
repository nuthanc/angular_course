export class UserModel { // Can be renamed to User
  constructor(
    public email: string,
    public id: string,
    public token: string, // Should be private and _token
    public expiryDate: Date // Should be private and _tokenExpirationDate
  ) {}

  // Missing token() getter
}
