import 'styled-components'

declare module 'styled-components' {
    // eslint-disable-next-line prettier/prettier
    export interface DefaultTheme {
        colors: {
            primary: string,
            secundary: string,
            tertiary: string,
            white: string,
            black: string,
        }
    }
}
