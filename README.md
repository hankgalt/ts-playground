# Typescript playground

node -v > .nvmrc

git init
npm init -y
npm i -D typescript
npx tsc --init
npm i -D jest ts-jest @types/jest
npx ts-jest config:init

## debugging

- Open the command palette and start Debug: JavaScript Debug Terminal
- Set a break-point in your file.
- Run tests in that terminal in a Watch mode npm test --watch

## Lint

npm i --save-dev eslint
./node_modules/.bin/eslint --init
npm install eslint-config-prettier prettier --save-dev
touch .prettierrc.json
touch .eslintignore
