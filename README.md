# About Project

This is a button component library.

online demo: https://button-comp-page-ks83g6r0t-asefa96.vercel.app/

## installation
```
npm i @asefa96/button-component-library
```

# Getting started

There are two methods for getting started with this repo.

#### Familiar with Git?

```
git clone git@github.com:asefa96/button-component-library.git
cd button-component-library
npm install
```

#### Not Familiar with Git?

Click [here](https://github.com/asefa96/button-component-library/archive/refs/heads/master.zip) to download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
npm install
```

## Build

[Rollup](https://github.com/rollup/rollup) is used in order to get the product library:

```
npm run rollup
```

[Rollup](https://github.com/rollup/rollup) is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the standardized ES module format for code, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. Rollup can optimize ES modules for faster native loading in modern browsers, or output a legacy module format allowing ES module workflows today.

You can refer to example `Button` component, but I think you'll get the idea.

### Proposals (Babel)

For smoother development some Babel plugin are included

- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
- [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)

## Styling component

`styled-components` lib is used in order to create components with styling.

For the use of `styled-components` refer to [rollup-plugin-postcss](https://styled-components.com/)

## Testing

Testing is done with [Jest](https://facebook.github.io/jest/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
You can refer to `Button.test.js` as an example.

```
npm run test
```

or (for getting coverage)

```
npm run test:coverage
```

## Publishing your library to NPM

To release your library to NPM or your private Registry, make sure you have an active account at [NPM](https://www.npmjs.com/), your `.npmrc` or file is correctly setup or your local settings refer to [publish](https://docs.npmjs.com/cli/v8/commands/npm-publish) and the repository url in `package.json` file is set to your repository url, then:

```
npm publish
```

## Scripts

- `npm run rollup` : To get the bundle of product.
- `yarn test` : Runs the tests.
- `yarn test:coverage`: Runs the test and shows the coverage.

## Usage

Import the `<Button />` component near the top of your application's tree.

You can use the component like this simply:

```js
import React from 'react'
import Button from "@asefa96/button-component-library"

export default function App() {
  return (
    <>
        /* with default parameters *\
        <Button />

        /* with pass parameters *\
        <Button stickyPosition="top-left" variant="secondary" text="secondary small" size="small" />

    <>
  )
}
```

- Props

<table>
  <tr>
  	<th>Name</th>
		<th>Type</th>
		<th>Default </th>
	  <th>Description</th>
  </tr>
   <tr>
  		<td>variant</td>
   		<td> "primary"
  | "secondary"
  | "error"
  | "success"
  | "orange"</td>
		<td>"primary"</td>
		<td>set the variant of button</td>
</tr>
 	</tr>
   <tr>
  		<td>size</td>
   		<td> "small" | "medium" | "large";</td>
		<td>"medium"</td>
		<td>set the button size </td>
</tr>
 	</tr>
   <tr>
  		<td>text</td>
   		<td>string</td>
		<td>"primary"</td>
		<td>set the button text </td>
</tr>
 	</tr>
  	</tr>
   <tr>
  		<td>stickyPosition</td>
   		<td> "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"</td>
		<td>-</td>
		<td>set the button sticky position </td>
</tr>
 	</tr>

</table>

## Resources

### Bundler

- [Rollup.js](https://rollupjs.org/guide/en)

### Testing

- [Jest](https://facebook.github.io/jest/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

### Compiler

- [Babel 7](https://babeljs.io/)
- [Typescript](https://www.typescriptlang.org/)
