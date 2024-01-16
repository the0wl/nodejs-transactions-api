# Deployment

Esta API está disponível em dois domínios:

- https://api-8xwz.onrender.com
- https://nodejs-transactions-api-production.up.railway.app

<br>

> ❗ Importante
> 
> O banco de dados PostgreSQL foi criado utilizando a versão gratuita do Render. Dito isso, ele irá expirar em 90 dias (October 9, 2023).

# Requisitos Funcionais (RF)

- [x] O usuário deve poder criar uma conta
- [x] O usuário deve poder obter um extrato da sua conta
- [x] O usuário deve poder listar todas transações que já ocorreram
- [x] O usuário deve poder visualizar uma transação única

# Regras de Negócios (RN)

- [x] A transação pode do tipo crédito que somará ao valor total, ou débito que será subtraído
- [x] Deve ser possível identificar o usuário entre as requisições
- [x] O usuário só pode visualizar transações que ele criou
