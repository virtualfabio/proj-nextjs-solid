/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import theme from './theme'

export type Theme = typeof theme

declare module 'styled-componets' {
  export interface DefaultTheme extends Theme {}
}
