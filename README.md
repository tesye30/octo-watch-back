# Octo Watch

## Faze de construção...
## 📕 Sumário
[1. O que é?](https://github.com/tesye30/octo-watch#1--o-que-%C3%A9)

[2. Como contribuir](https://github.com/tesye30/octo-watch#2-como-contribuir)

[3. Legenda](https://github.com/tesye30/octo-watch#3--legenda)

[4. Implementações](https://github.com/tesye30/octo-watch#4--implementa%C3%A7%C3%B5es)

[5. Tecnologias](https://github.com/tesye30/octo-watch#5--tecnologias)

[6. Documentação](https://github.com/tesye30/octo-watch#6--documenta%C3%A7%C3%A3o)

[7. Owners](https://github.com/tesye30/octo-watch#7--owners)

## 1. O que é?
Como qualquer outra rede social o objetivo primário é CONECTAR PESSOAS, porém dessa vez será por meio de conteudo geek !
Uma rede social simples que permitirá comentários e avaliações animes/mangás/comics/filmes/tudo que tiver na nossa cabeça. Com intenção de conversar e interagir com outras pessoas a respeitos de assuntos diversos sobre esse universo.

## 2. 🤔 Como contribuir
### Pull Request
1. Clone o repositório:
    ```sh
    $git clone https://github.com/tesye30/octo-watch.git
    ```

2. Crie uma branch developer (ou qualquer outro nome):
    ```sh
    $git checkout -b developer
    ```

3. Navegue até a branch:
    ```sh
    $git checkout developer
    ```

4. Faça suas modificações nessa branch e envie elas para que seja analizada:
    ```sh
    $git push origin developer
    ```

5. Abra um [Issue](https://github.com/tesye30/octo-watch/issues) com o link do PR, verique se não há um label que posso sinalizala melhor e explique o que foi feito, assim que nós analisarmos você terá um feedback.

6. Esse repositório é mantido por iniciantes ainda, nós apreciariamos mutio caso você queira nos dar algumas dicas sobre está seção e até sobre o código em si.

## 3. 📖 Legenda
- Works = Animes/movies/among others;

## 4. ✅ Implementações
- [ ] CRUD User
    - [x] Find By Id (Admin - GET);
    - [ ] Find By Name (GET);
    - [x] Create (POST);
    - [ ] Login (POST);
    - [ ] Update (PUT);
    - [x] Delte (DELETE);
    - [ ] Logout (Estudar...).

- [ ] CRUD Works
    - [ ] Find By Id (Admin - GET);
    - [ ] Find By Name (GET);
    - [ ] Find By Type (GET);
    - [ ] Create (Admin - POST);
    - [ ] Update/edit (Admin - PUT);
    - [ ] Delete (Admin - Delete).

- [ ] CRUD Studios
    - [ ] Find By Id (Admin - GET);
    - [ ] Find By Name (GET);
    - [ ] Create (Admin - POST);
    - [ ] Update/edit (Admin - PUT);
    - [ ] Delete (Admin - DELETE).

- [ ] CRUD Episodes
    - [ ] Find By Id (Admin - GET);
    - [ ] Create (Admin - POST) ;
    - [ ] Update/edit (Admin - PUT);
    - [ ] Delete(Admin - DELETE).

- [ ] CRUD Categories
    - [ ] Find By Id (Admin - GET);
    - [ ] Find By Name (GET);
    - [ ] Create (Admin - POST);
    - [ ] Update/edit (Admin - PUT);
    - [ ] Delete (Admin - DELETE).

- [ ] CRUD Comments
    - [ ] Find Comments By Work Id (GET);
    - [ ] Create (POST);
    - [ ] Update/edit (PUT);
    - [ ] Delete (DELETE).

- [ ] CRUD works_categories
    - [ ] Find Works In Category (GET);
    - [ ] Add Work in Category (Admin - POST);
    - [ ] Delete Work in Category (Admin - DELETE).

- [ ] CRUD works_studios
    - [ ] Find Work From A Studio (GET);
    - [ ] Add Work to Studio (Admin - POST);
    - [ ] Delete Studio Work (Admin - DELETE).

- [ ] CRUD Reactions

- [ ] Auth
    - [ ] Is Logged;
    - [ ] Is Admin;
    - [ ] ...

- [ ] Validations
    - [ ] Is Email;
    - [ ] Is URL.
    - [ ] ...

- [x] DB
    - MySQL
- [ ] Testes
    - [ ] Testes de usuers
    - [ ] Testes de works
    - [ ] Testes Studios
    - [ ] Testes episodes
    - [ ] Testes categories
    - [ ] Testes comments
    - [ ] Testes works_categories
    - [ ] Testes works_studios

    
## 5. 💻 Tecnologias
* Jest (TDD);
* Node;
* Express;
* Bcrypt;
* JWT;
* MySQL;
* Knex;
    * mysql2;
* Validator.

## 6. 🎉 Para rodar o projeto
1. Instale todas es tec's usadas junto do Node JS:

    ```
    npm install
    ```
2. Rode o aplicativo

    ```
    npm run dev
    ```
3. Você precisará de uma ferramente de teste de requisições como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)
4. Digite localhost:3000 e siga a minha tentativa de documentação para usar a API.

## 6. 📚 Documentação

## 7. 😎 Owners
[Gustavo](https://github.com/GustavoGomesDias) | [Lucas](https://github.com/tesye30)
