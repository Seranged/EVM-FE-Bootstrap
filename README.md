# EVM-FE-Bootstrap Repo

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/seranged.svg?style=social&label=Follow%20%40seranged)](https://twitter.com/seranged)

## Stack

- [Next.js](https://github.com/vercel/next.js)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- [WAGMI](https://github.com/wagmi-dev/wagmi)
- [Ethers.js](https://github.com/ethers-io/ethers.js/)
- [RainbowKit](https://github.com/rainbow-me/rainbowkit)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Typechain](https://github.com/ethereum-ts/TypeChain)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Getting Started

1. Run `yarn install` to install dependencies.
2. Create `.env.local` file in root and add ALCHEMY_API_KEY
3. Add your contract abi.json into `/src/contracts`and run `yarn typechain`
4. Run `yarn dev` to begin developing.

## EVM-Stack Explanation

- [WAGMI](https://github.com/wagmi-dev/wagmi) - WAGMI is a React hook library that abstracts out a lot of vanilla ethers.js calls into easy-to-import functions which you just pass props into. There are 20+ hooks to choose from that range from chain information, contract calls, contract writes, balance queries, and more. Each one of these contains all the async properties you would need to create a much more interactive react application.

- [Ethers.js](https://github.com/ethers-io/ethers.js/) - Ethers.js is a low-level Ethereum interface abstraction module that WAGMI utilizes under the hood. It is very unlikely that you will utilize many functions from this library as WAGMI covers most of it. The main ethers.js functions you will utilize will be `utils.formatUnits()` or `utils.parseUnits()`. In a few months, the team behind WAGMI will be migrating to an alternative solution that they have created: [Viem](https://viem.sh/). This will require all of us to migrate away from Ethers.js.

- [RainbowKit](https://github.com/rainbow-me/rainbowkit) - RainbowKit is an all-in-one multi-wallet library for React that is currently the best that is publicly available. The built-in modules handle wallet connection, disconnection, different types of wallets, display balances, support for multiple chains as well as chain-switching, etc. On top of this, Rainbowkit is extremely customizable stylistically, so developers can rebrand the modals/buttons how they wish. An example of this is provided in this repo, inside Navbar.tsx, where the 'Connect Wallet', 'Wrong Network', 'Chain Switcher', and 'Account' buttons have been restyled with tailwind syntax. 

- [Typechain](https://github.com/ethereum-ts/TypeChain)  - Typechain is Typescript for EVM contracts. Provide the ABI for your contract, run the autotype generator, and utilize the generated types for a better developer experience. 