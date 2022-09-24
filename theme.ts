import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  
}

const fontsConfig = {
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
}

const theme = extendTheme({ 
    themeConfig,
    fontsConfig
 })

export default theme
