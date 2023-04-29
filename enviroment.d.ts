export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALCHEMY_API_KEY: string
    }
  }
}
