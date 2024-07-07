## Project

## About project architecture
- mono repo with packages
  - component library package
  - data layer package
  - main pwa app for GPT clone.

  ![package architecture](http://url/to/img.png)

# ChatGPT Clone

- storybook
- styled component
- React + vite [nextJS]

# API

- node + express
- connect to open API

## Configure steps

- npx lerna init
- npm install
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