# API de agenda de contatos

Projeto prático de desenvolvimento de APIs com Node.js e Express. Desenvolvido na 9ª semana do curso de Back-end da {reprograma}.

> Status do Projeto: Concluido :heavy_check_mark:



## Linguagens e Tecnologias utilizadas
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Nodejs](https://img.shields.io/badge/NodeJs-339933.svg?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js%20-%23404d59.svg?logo=express&logoColor=white)
![Mongo](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB.svg?logo=yarn&logoColor=white)

---

## Rodando o projeto

No terminal, clone o projeto:
`git clone https://github.com/luzialeticia/api-reprograma-blog.git`

Entre na pasta do projeto:
`cd api-reprograma-blog`

Instale as dependências:
`yarn install`

Execute:
`yarn start`


Use o Postman ou Insomnia para realizar as requisições ou utilize no seu front-end.

---


### Dados para Collection

- id: autogerado e obrigatório
- nome: texto e obrigatório
- celular: texto e obrigatório
- dataNascimento: data e obrigatório
- fotoPerfil: texto e não obrigatório

### API deve retornar seguinte JSON:

```jsx
[
	{
		"_id": "5fa6128cb3afb1104017dd1a",
		"nome": "Letícia Luzia",
		"celular": "980808080",
		"dataNascimento": "1990-01-27T02:00:00.000Z",
		"fotoPerfil": "https://linkdafoto.com.br"
	}
]
```

### Essa API tem as seguintes rotas:

- **"/"** Retorna index com apresentação
{
   mensagem: bem vinda a lista de contatinhos
}
- **"/contacts"** Retorna todos os dados do banco de dados
- "**/contacts/** id/[ID]" Retorna contato por id específico
- "**/contacts/** name/[NOME]" Retorna contato por nome específico
- "**/contacts/add**" Cria novo contato e retorna mensagem amigável
- "**/contatos/update/** [ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)
- "**/contatos/update/** [ID]" Atualiza somente **telefone** do contato por id específico e retorna mensagem amigável
- "**/contacts/delete/** [ID]" Deleta contato por id específico e retorna mensagem amigável

### Arquitetura MVC

```bash
\--📂 NOME-DO-SEU-SERVIDOR
		 |   .gitignore
		 |   README.md
		 |   yarn-lock.json
		 |   package.json
		 |   **server.js**
			\--📂src
			    |   **app.js**
			    |
			    📂---controllers
			    |       **Contacts.js**
			    |
			    📂---models
					|   **contactSchema.js
					|   repository.js**
			    |
			    📂---routes
			            **Contacts.js
									index.js**
```
### Diagrama

![https://github.com/luzialeticia/phonebook-api/blob/master/assets/diagrama-mvc.png](https://github.com/luzialeticia/phonebook-api/blob/master/assets/diagrama-mvc.png)