import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  // Salvar todos email enviado dentro da variável messages
  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
