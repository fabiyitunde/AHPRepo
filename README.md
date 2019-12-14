# AHP Node JS Microservice API

To Implement Analytic Hierarchy Process for Requirement Priotization.

[Using Clean Architecture for Microservice APIs in Node.js with MongoDB and Express]

>

## Features

- To Allow a User To Register
- Setup Case Studies
- Create Parameters Specific To That Case Study e.g Intensity Values And descriptions, Case Study Elements
- Allow Users to input data and view results of anaylysis

## Running Locally

#### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node JS](https://nodejs.org/en/)
- [Mongo DB](https://www.mongodb.com)

#### 1. Clone the repo and install dependencies

```bash
git clone
cd ahp_project
npm i
```

#### 2. Modify the .env file

Save `sampledotenv` as `.env` and then add your database .

#### 3. Startup your MongoDB

Usually this is just: `mongod` on the command line.

#### 4. Start the server

To run in production mode where code is transpiled by Babel into a `dist` folder and run directly in `node`:

```bash
npm start
```

To run in development mode where code is run by [babel-node](https://babeljs.io/docs/en/babel-node) via [nodemon](https://nodemon.io) and re-transpiled any time there is a change:

```bash
npm run dev
```
