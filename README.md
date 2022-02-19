<img  src="./public/marvel.gif" hight="400" width="400">

# Marvel App

The goal was to create a small APP that fetches an API endpoint and shows the items in a result page.

### Development

You can run a local development server with

#### `npm start`

## Features

- Fully responsive layout following the mobile first principle
- Lazy-loading of product images
- Searchbar that allows dynamic filtering of products based on Name Character
- Ordering functionality for Name Character
- Show detailed information of the selected element.

### Install Dependencies

First, install all dependencies

### Build & Deploy

Netlify: https://beezy-marvel.netlify.app/

## Considerations

- I decide to use TypeScript as it has no implications on the genereated bundle-size (as its compiled during the build) and makes the code much more secure because of the static typing.
- I tried to not rely on external dependencies besides React library
- I thought of using styled components for styling my app, but I finally went for SaSS preprocessor
