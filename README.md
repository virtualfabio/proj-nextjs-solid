This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Install
npx create-next-app proj-nextjs-solid
# instalando o typescript
npm i --dev typescript @types/react @types/node
# renomear os arquivos .js para .tsx
# rodar a aplicação em dev para que seja identificado e criado os arquivos de configurações
npm run dev
npm i --dev eslint
npx eslint --init
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
npm i styled-components
npm i @types/styled-components -D

# incluir "jest": true no "env" no arquivo => \.eslintrc.json
# incluir extensões do \.eslintrc.json
# criar o .eslintignore
# criar o .editorconfig
# instalar as extendões do vsCode: ESlint e Prettier - Code formatter
# criar babel.config.js
# criar pasta ./src e move a pasta ./pages para ./src
# criar pasta ./src/styles e o arquivo global.ts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
