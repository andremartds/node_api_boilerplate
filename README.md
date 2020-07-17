# NESM API BOILERPLATE
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

</ul>

## The structure proposed for it

<ul>

  <li> ./ -> Configuration .env, .eslint, .prettier, sequelize and nodemon </li>

  <li> ./src -> All folders for the project and files for initialize </li>

  <li> /src/app -> Controllers and models </li>

  <li> /src/app/middlewares -> Middlewares for project </li>
  
  <li> /src/app/models -> Models for project </li>

  <li> /src/config -> configs for the project </li>

  <li> /src/database -> migrations and seeders for database </li>


</ul>

## How do you begin a project?

1. Clone the repository with `git clone https://github.com/talyssonoc/node-api-boilerplate`
2. Setup the database on `config/database.js`
3. Install the dependencies with `yarn` (click here if [you don't have Yarn installed](https://yarnpkg.com/docs/install))
4. Run the database migrations with `yarn sequelize db:migrate`
5. Run the application in development mode with `yarn dev`

## Access:

1. Use Insomnia to interact with API ([Insomnia](https://insomnia.rest/download/))

