# **Customer API**
API para cadastro performático e seguro para os clientes da empresa.

## 🔨 Como rodar o projeto
### 📦 Clonar o repositório
```bash
$ git clone git@github.com:carlosmeds/customer-api.git
```
### 🔑 Inserindo as variáveis de ambiente
1. Criar um arquivo .env na raíz do projeto baseado no arquivo .env.example
2. Preencher o arquivo com as variáveis necessárias
3. Sobre as variáveis:

| Variável | Descrição | Observação |
| --- | --- | --- |
| REDIS_HOST | Host do Redis | Caso utilize o docker compose, definir como "redis-connection"
| REDIS_PORT | Porta do Redis |
| SSO_URL | Url para checar token | O valor deve ser igual a https://accounts.seguros.vitta.com.br/auth/realms/careers/protocol/openid-connect/token/introspect
| SSO_CLIENT_ID | Client ID para utilizar o SSO |
| SSO_CLIENT_SECRET | Chave secreta para utilizar o SSO |

### 🖥 Rodando localmente
```bash
$ npm i -g @nestjs/cli
$ npm install
$ npm start:prod
```
### 🐋 Rodando com docker 
```bash
$ docker-compose up
```

## 👤 Autor
Feito com 💚 por Carlos Nakaguishi
<br /><br />
Email: [carlosmedeiros964@gmail.com](carlosmedeiros964@gmail.com)
<br />
Linkedin: [linkedin.com/in/carlos-nakaguishi/](https://www.linkedin.com/in/carlos-nakaguishi/)
