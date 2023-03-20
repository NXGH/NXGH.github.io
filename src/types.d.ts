export type PropsWithClassName<T = {}> = PropsWithChildren<T> & { className: string }

declare module '*.svg' {
  const src: string
  export default src
}
