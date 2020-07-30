# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF**

- Utilizar mailtrap para testar envios em ambiente de desenvolvimento
- Utilizar amazon SES para envios de email em produção
- O envio de e-mail deve acontecer em segundo plano (background job - fila)

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar sua senha antiga

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu perfil (nome, email e senha)

**RN**

- O usuário não pode alterar seu e-mail já cadastrado no sistema
- Para atualizar sua senha, o usuário deve informar a senha antiga
- Para atualizar sua senha, o usuário deve confirmar a a nova senha

# Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificação não lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no MongoDB
- As notificações do prestador deve ser enviadas em tempo-real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores devem ser armazenada em cache

**RN**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponíveis entre as (8h as 18h)
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar consigo mesmo
