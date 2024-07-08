## Project Description

frontend project which has clone of chat GPT

## Frontend techstack involved

- React
- vite
- lerna for monorepo manager
- Storybook
- Styled components
- typescript
- Docker
- jest
- cypress
- SSR on later stage

## backend techstack

- express
- node
- thrid party endpoint

## About Frontend project architecture

- mono repo with packages
  - component library package
  - data layer package
  - main pwa app for GPT clone.
![package architecture](https://github.com/herat130/AI/blob/master/dependecy_graph.png)

## Configure steps

- npx lerna init
- npm install
- npm i -d nx
- npx lerna create ui-library
- git config  --global user.name "herat130"
- git config  --global user.email "<herat130@gmail.com>"
- npx lerna create pwa-app
- modify pwa-app dependecies relvent to file in package.json
"dependencies": {
    "ui-library": "file:../ui-library"
  },
- npm install in root directory
- npx lerna repair [after updating lerna version]
- npx lerna clean -- to clear all missconfiguration
- npx lerna publish [To publish all dependecies which got changed]
- npx lerna run build [at root folder to compile all dependecy]
- npx lerna test [at root folder]
- npx lerna add-caching to create nx file for caching commands like build , run , test etc...
- update lerna for independent versioning
- use of concurrently to execute both the server of pwa and ui-library application

## add specific package to targeted internal package

- npm i react-router-dom --workspace=pwa-app
