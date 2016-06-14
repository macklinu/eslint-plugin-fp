# eslint-plugin-fp [![Build Status](https://travis-ci.org/jfmengels/eslint-plugin-fp.svg?branch=master)](https://travis-ci.org/jfmengels/eslint-plugin-fp)

ESLint rules for functional programming


## Install

```
$ npm install --save-dev eslint eslint-plugin-fp
```

## Usage

Configure it in `package.json`.

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"env": {
			"es6": true
		},
		"plugins": [
			"fp"
		],
		"rules": {
      "no-var": "error",
      "fp/no-let": "error",
      "fp/no-mutation": "error",
      "fp/no-this": "error"
		}
	}
}
```


## Rules

- [no-let](docs/rules/no-let.md) - Forbid the use of `let`.
- [no-mutation](docs/rules/no-mutation.md) - Forbid the use of mutating operators.
- [no-this](docs/rules/no-this.md) - Forbid the use of `this`.

## Recommended configuration

This plugin exports a [`recommended` configuration](index.js) that enforces good practices.

To enable this configuration, use the `extends` property in your `package.json`.

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"plugins": [
			"fp"
		],
		"extends": "plugin:fp/recommended"
	}
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [Jeroen Engels](https://github.com/jfmengels)
