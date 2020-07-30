import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  // Encontrar o usuário pelo token
  findByToken(token: string): Promise<UserToken | undefined>;
}
