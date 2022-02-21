<img  src="./public/marvel.gif" hight="400" width="400">

# Marvel App

The goal was to create a small APP that fetches an API endpoint and shows the items in a result page.

### Development

You can run a local development server with

### Install Dependencies

First, install all dependencies and make sure you using Node v14.17.6
Comand #npm i

#### `npm start`

### Build & Deploy

Netlify: https://beezy-marvel.netlify.app/

## Features

- Fully responsive layout following the mobile first principle
- Lazy-loading of product images
- Searchbar that allows dynamic filtering of products based on Name Character
- Ordering functionality for Name Character
- Show detailed information of the selected element.

## Considerations

- On localhost it will not work because there are .env keys for it to work you must put .env file as follow:

  - REACT_APP_URL=http://gateway.marvel.com/v1/public/characters?{yourApiKey}
  - REACT_APP_URL_MARVEL=http://gateway.marvel.com/v1/public/characters
  - REACT_APP_KEY={yourApiKey}

- I decide to use TypeScript as it has no implications on the genereated bundle-size (as its compiled during the build) and makes the code much more secure because of the static typing.
- I tried to not rely on external dependencies besides React library
- I thought of using styled components for styling my app, but I finally went for SaSS preprocessor
