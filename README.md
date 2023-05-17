# EVM-FE-Bootstrap Repo [![twitter URL](https://img.shields.io/twitter/url/https/twitter.com/seranged.svg?style=social&label=Follow%20%40seranged)](https://twitter.com/seranged)

![lastCommit](https://img.shields.io/github/last-commit/seranged/evm-fe-bootstrap?style=for-the-badge)
![lines](https://img.shields.io/tokei/lines/github/seranged/evm-fe-bootstrap?style=for-the-badge)
![license](https://img.shields.io/github/license/seranged/evm-fe-bootstrap?style=for-the-badge)

[![demo](https://img.shields.io/badge/Demo_Page-Click-success?style=for-the-badge)](https://www.seranged.com/)

![stars](https://img.shields.io/github/stars/seranged/evm-fe-bootstrap?style=social)
![forks](https://img.shields.io/github/forks/seranged/evm-fe-bootstrap?style=social)

## Stack

- [Next.js](https://github.com/vercel/next.js)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- [WAGMI](https://github.com/wagmi-dev/wagmi)
- [Viem](https://github.com/wagmi-dev/viem)
- [RainbowKit](https://github.com/rainbow-me/rainbowkit)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Abitype](https://github.com/wagmi-dev/abitype)
- [Rome](https://github.com/rome/tools) (EsLint + Prettier on Steroids)

## Getting Started

1. Run `yarn install` to install dependencies.
2. Create `.env.local` file in root and add ALCHEMY_API_KEY
3. Run `yarn dev` to begin developing.

4. `Optional`: This repository has an integration with Dependabot (in the .github folder). This means that if you set up the bot on Github, it will check dependencies every week and ask for a pull request to merge into the codebase. Furthermore, I have added in [combine-prs-workflow](https://github.com/hrvey/combine-prs-workflow), which will merge all of the Dependabot PR requests from each dependency update into one PR for you to merge. Click [here](https://github.com/hrvey/combine-prs-workflow) to set up that PR merging, and click [here](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates) to set up Dependabot

## NextJS v13.4^ Help!

- [Next.js v13.4^](https://nextjs.org/blog/next-13-4) - Next.js has recently fully released their production-stable version of a new directory architecture, and this repository has been updated to reflect it. Alot of files will need 'use client' on the top of the file to support hooks such as `useState` and `useEffect`. When I upgrade the repo to support [Viem](https://viem.sh/) I will create some SSR (Server Side Rendering) `.tsx` files. Here are the `App/` Directory docs: [App Directory Docs](https://nextjs.org/docs/app/building-your-application/routing).

- [Page Directory Branch](https://github.com/Seranged/EVM-FE-Bootstrap/tree/pages-dir) - If you do not wish to stay up to date with NextJS, this is the older version of the repository that uses NextJS's Page Directory infrastructure `v13.3.0`. However, it is not recommended to use this version as support for it will be decommissioned

- [Pre-Viem Branch](<https://github.com/Seranged/EVM-FE-Bootstrap/tree/app/dir-ethers.js-old-wagmi-(no-viem)>) - If you do not wish to stay up to date with the WAGMI teams work, this is the older version of the repository that uses NextJS's App/ Directory `v13.4^`. However, it is not recommended to use this version as support for WAGMI + Ethers has and will continue to be decommissioned

## EVM-Stack Explanation

- [WAGMI](https://github.com/wagmi-dev/wagmi) - WAGMI is a React hook library that abstracts out a lot of vanilla ethers.js calls into easy-to-import functions which you just pass props into. There are 20+ hooks to choose from that range from chain information, contract calls, contract writes, balance queries, and more. Each one of these contains all the async properties you would need to create a much more interactive react application.

- [Viem](https://viem.sh/) - Viem is a recently released low-level Ethereum interface abstraction module that WAGMI and RainbowKit utilizes under the hood. Created by the same developers as WAGMI and ABIType.

- [RainbowKit](https://github.com/rainbow-me/rainbowkit) - RainbowKit is an all-in-one multi-wallet library for React that is currently the best that is publicly available. The built-in modules handle wallet connection, disconnection, different types of wallets, display balances, support for multiple chains as well as chain-switching, etc. On top of this, Rainbowkit is extremely customizable stylistically, so developers can rebrand the modals/buttons how they wish. An example of this is provided in this repo, inside Navbar.tsx, where the 'Connect Wallet', 'Wrong Network', and 'Account' buttons have been restyled with tailwind syntax.

- [ABIType](https://abitype.dev/) - ABIType is Typescript for EVM contracts. ABIType provides utilities and type definitions for ABI properties and values, covering the Contract ABI Specification, as well as EIP-712 Typed Data.

## Legacy-Stack Explanation

- [Next.js](https://github.com/vercel/next.js) - Next.js is a React framework for building fast, production-ready web applications with features such as server-side rendering, automatic code splitting, optimized image loading, and improved error handling. The framework also abstracts page routes, which can simplify and accelerate the development process. Additionally, Next.js has a fast hot reload feature that enables developers to see changes in real-time as they make modifications to their code, which is faster than many other solutions.

- [Tailwind](https://github.com/tailwindlabs/tailwindcss) - A friend called it 'CSS for Zoomers', which is a pretty apt description. Tailwind is a CSS framework that provides pre-defined utility classes to style web applications consistently and responsively. The inline styling framework helps developers stay in the same .tsx file (and line as the HTML they are targeting) as the logic/component without having to move to a different file to style it. Additionally, the abbreviated syntax of Tailwind can increase developer efficiency once they have learned the syntax.

### Tailwind Libaries

- I purposefully have not included tailwind component libraries in this repo to keep bloat low. A few that I would recommend would be:

1. [Shadcn](https://ui.shadcn.com/) - Free
2. [Flowbite](https://flowbite.com/docs/getting-started/introduction/) - Freeminum
3. [Daisyui](https://daisyui.com/) - Free
