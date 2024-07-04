## Project

# Chat GPT Clone

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
- npm install