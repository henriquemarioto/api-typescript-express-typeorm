# Api Express com Typescript e TypeORM
Api com CRUD de usuário, login, carrinho, produtos e compra.

Endpoint da api: **http://localhost:3000**

### Como utilizar
O banco roda em **docker**, lembre-se que ele ira utilizar a porta **5432**, rodamos o seguinte comando no terminal:
```js
docker-compose up -d
```

Logo em seguira instale as **dependencias** com
```js
yarn
```

Crie um arquivo **.env** na raiz do projeto e use o **.env.example** para preenche-lo com base nas informções o **docker-compose.yml**
```js
POSTGRES_USER=marioto
POSTGRES_PWD=docker
POSTGRES_DB=defaultdb
JWT_SECRET="secretKey"
```

Rode as **migrations** rodando o comando
```js
yarn typeorm migration:run -d src/data-source.ts
```

Rode a **aplicação** usando
```js
yarn dev
```

# Users

**POST /users**
Cadastra um novo usuário

**Body**
```json
{
	"name": "Marioto",
	"email": "email@email.com",
	"password": "12345678"
}
```
**Resposta**
```js
{
	"id": "1ef7f3b6-fd4a-450f-9d00-b9f849f462d1",
	"name": "Marioto",
	"email": "email@email.com",
	"password": "$2b$10$JbsQ8XaARIxFaSWmtUKLQOUj18LGz6cczPFekipR82MoSNLxNbc6W",
	"cart": {
		"id": "67f77895-84ab-43db-8559-cc8b49bd8c4d",
		"subtotal": 0
	}
}
```
<hr />

**POST /users/login**
Rota para fazer login, retorna um **token**

**Body**
```json
{
	"email": "email@email.com",
	"password": "12345678"
}
```
**Resposta**
```js
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY1MjczODkxOSwiZXhwIjoxNjUyODI1MzE5fQ.hd3aSPC8wJzmGr2zx-ccxo6_VQ9Jwh7mFPcyhghySRg"
```
<hr />

**GET /users**
Retorna um *array* com todos os usuário, essa rota precisa de um token
**Headers**
```js
{
	"Authorization": "token"
}
```
**Resposta**
```json
[
	{
		"id": "1ef7f3b6-fd4a-450f-9d00-b9f849f462d1",
		"name": "Marioto",
		"email": "email@email.com",
		"password": "$2b$10$JbsQ8XaARIxFaSWmtUKLQOUj18LGz6cczPFekipR82MoSNLxNbc6W",
		"buys": [],
		"cart": {
			"id": "67f77895-84ab-43db-8559-cc8b49bd8c4d",
			"subtotal": 0,
			"products": []
		}
	}
]
```
<hr />

**GET /users/me**
Retorna um ***objeto*** com **todas as informações** do user do token passado

**Headers**
```js
{
	"Authorization": "token"
}
```
**Resposta**
```json
{
	"id": "1ef7f3b6-fd4a-450f-9d00-b9f849f462d1",
	"name": "Marioto",
	"email": "email@email.com",
	"password": "$2b$10$JbsQ8XaARIxFaSWmtUKLQOUj18LGz6cczPFekipR82MoSNLxNbc6W",
	"buys": [],
	"cart": {
		"id": "67f77895-84ab-43db-8559-cc8b49bd8c4d",
		"subtotal": 0,
		"products": []
	}
}
```
<hr>

**PATCH/users/me/updatepassword**
Atualiza o password do user do token

**Headers**
```json
{
	"Authorization": "token"
}
```
**Body**
```json
{ 
	"password": "a2s54z6x87"
}
```

**Resposta**
```json
{
	"message": "Password updated"
}
```
<hr />

**DELETE /users/me**

**Deleta** o usuário do token.

**Headers**
```json
{
	"Authorization": "token"
}
```
**Resposta**
```json
{
	"message": "User deleted with success!"
}
```

# Products
**POST /products**
Cadastra um novo produto

**Body**
```json
{
	"name": "mouse",
	"description": "um mouse",
	"price": 200.232
}
```
**Resposta**
```json
{
	"id": "c5d8dc75-f386-4c04-bffe-7266c8467ed8",
	"name": "mouse",
	"description": "um mouse",
	"price": 200.23
}
```

<hr />

**GET /products**
Retorna um array com todos os produtos
```json
[
	{
		"id": "c5d8dc75-f386-4c04-bffe-7266c8467ed8",
		"name": "mouse",
		"description": "um mouse",
		"price": 200.23
	}
]
```

# Cart 

**POST /cart**
Cadastra produtos no carrinho do usuario no token

**Body**
```json
{
	"product_id": "ad9afe02-8d37-40e4-96a8-e2d60597b978"
}
```
**Resposta**
```json
{
	"id": "da0f6202-0365-4a30-8a5c-efad7b905d90",
	"subtotal": 200.23,
	"products": [
		{
			"id": "c5d8dc75-f386-4c04-bffe-7266c8467ed8",
			"name": "mouse",
			"description": "um mouse",
			"price": 200.23
		}
	]
}
```
<hr />

**DELETE /cart/:product_id**
Deleta  um produto no carrinho pelo id

*Não retorna nada*

# Buy
**POST /buy**
Finaliza a compra no carrinho do usuario do token

**Headers**
```json
{
	"Authorization": "token"
}
```
**Resposta**
```json
[
	{
		"id": "143084d1-27a1-47c6-93fe-ac413d7a2d49",
		"total": 200.23,
		"products": [
			{
				"id": "c5d8dc75-f386-4c04-bffe-7266c8467ed8",
				"name": "mouse",
				"description": "um mouse",
				"price": 200.23
			}
		]
	}
]
```
