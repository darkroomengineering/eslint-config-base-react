# @studio-freight/eslint-config-base-react

This package includes the shareable ESLint configuration used by [Studio Freight](https://github.com/studio-freight) on React/Next.js based websites.

## Usage

Install this package:

`npm install --save-dev @studio-freight/eslint-config-base-react`

or

`yarn add --dev @studio-freight/eslint-config-base-react`

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
	"extends":  "@studio-freight/eslint-config-base-react"
}
```

you're gucci.

## Includes

### [ESLINT Standard React](https://github.com/standard/eslint-config-standard-react)

### Prettier settings:

```js
{
	useTabs:  false,
	tabWidth:  2,
	printWidth:  80,
	singleQuote:  false,
	trailingComma:  "none",
	jsxBracketSameLine:  false,
	semi:  false
}
```

make sure you have the following setting enabled in VSCode:

```js
"editor.codeActionsOnSave": {
	"source.fixAll": true
}
```

since prettier is already included here, you don't need to run any prettifying tools on your end, eslint already does that for you, you're welcome!
