declare module '*.css' {
  interface CSSModule {
    [key: string]: string
  }

  const content: CSSModule
  export = content
}
