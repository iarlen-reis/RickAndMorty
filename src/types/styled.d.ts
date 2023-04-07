import 'styled-components'

declare module 'styled-components' {
    // eslint-disable-next-line prettier/prettier
    export interface DefaultTheme {
        colors: {
            primary: string,
            secundary: string,
            tertiary: string,           
            quaternary: string,           
            white: string,
            black: string,
        }
        font: {
            superSmall: string,
            small: string,
            regular: string,
            superRegular: string,
            big: string,
            superBig: string,
          }
        gap: {
            small: string,
            regular: string,
            big: string,
        }
    }
}
