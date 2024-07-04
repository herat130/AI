## Project

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