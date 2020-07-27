# NodeJs API BOILERPLATE
<p> The main purpose of this project is to provide boilerplate project setup using best practices of programing for Nodejs and Express </p>

## Stack

<ul>

  <li> NodeJs </li>

  <li> ExpressJs </li>

  <li> Bcryptjs </li>

  <li> Dotenv </li>

  <li> Sequelize </li>

  <li> JWT </li>
  
  <li> dotenv </li>
  
  <li> Multer </li>

</ul>

## The structure proposed for it

<ul>

  <li> ./ -> Configuration .env, .eslint, .prettier, sequelize and nodemon </li>

  <li> src -> All folders for the project and files for initialize </li>

  <li> src/app -> Controllers and models </li>

  <li> src/app/middlewares -> Middlewares for project </li>
  
  <li> src/app/models -> Models for project </li>

  <li> src/config -> configs for the project </li>

  <li> src/database -> migrations and seeders for database </li>

  <li> tmp/uploads -> files uploaded in route /files method POST </li>

</ul>

## How do you begin a project?

### Before, create the docker container (suggestion)

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:latest

// and run the command below

docker start database

```

1. Clone the repository with `git clone git@github.com:andremartds/node_api_boilerplate.git`
2. Setup the database on `config/database.js`
3. In your first execution, you need to use the NPM for generating folder node_modules, now you can use the yarn  
4. Edit the .env.example for .env and added your configs
5. Run the database migrations with `yarn sequelize db:migrate`
6. Run the application in development mode with `yarn dev`

## Access:

1. Use Insomnia to interact with API ([Insomnia](https://insomnia.rest/download/))

## Entry points

1. /users VERBS -> (GET, POST, PUT)
1. /file VERBS -> (POST)
2. /session VERB -> (POST) validation and generation of token JWT

## values .env

<ul>
<li> 
  DB_HOST=localhost
</li>
<li> 
  DB_USER=postgres
</li>
<li> 
  DB_PASS=docker
</li>
<li> 
  DB_HOST=localhost
</li>
<li> 
 DB_NAME=(you need to create the database)
</li>
</ul>

## Beautiful code with Prettier and Eslint (optional for vscode)

```
yarn add eslint -D

yarn eslint --init

// Select your configs at eslint
### To check Syntax, find problems, and enforce code style 
> Javascript Modules
> select node for React or VUE
> Select node

// my config for eslint and prettier is in file .eslint.example.js


// now add into you config.json (sugestion)
"editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
    ],

```

## Contributing:

<p> This project is open to suggestions and contribuitions. </p>