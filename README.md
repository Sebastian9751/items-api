# ITEMS-API

## Installation
### 1. Clone the repository
```bash
$ git clone https://github.com/Sebastian9751/items-api-test.git
```
### 2. Dependencies
```bash
# To install dependencies, run this command in the root:
$ npm install
```
### 3. Credentials

```bash
# Before running the server, make sure to create your .env file

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_PORT=
SECRET_KEY=

```
## Linter
#### This project has eslint and prettier rules configured. It is recommended to install the respective extensions in Visual Studio Code:

#### Eslint : dbaeumer.vscode-eslint

![image](https://user-images.githubusercontent.com/85807291/223141938-3e1dc625-0ca6-4074-b227-9dcfb6aadf47.png)


#### Prettier : esbenp.prettier-vscode

![image](https://user-images.githubusercontent.com/85807291/223141790-e59a323f-834b-461f-bccf-c767ce136354.png)



## Running the Server
```bash
# For development:
$ npm run dev
```



## Folder Structure
```bash
├─ src
│   ├───controllers
│   │
│   ├───database
│   │
│   ├── middlewares
│   │
│   ├───models
│   │
│   ├───routes
│   │
│   │───schemas
│   │
│   └───utils
│
├── .env
│
├── README
│
├── app.js
│
└── index.js
```



