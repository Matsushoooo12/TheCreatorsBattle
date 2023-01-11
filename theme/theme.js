import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    mainGradient: {
      100: '#7CAAFF',
      200: '#8D85F4',
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.500',
        color: 'gray.800',
      },
    },
  },
  components: {
    Drawer: {
      parts: ['dialog', 'header', 'body'],
      variants: {
        primary: {},
        secondary: {
          dialog: {
            maxW: '220px',
          },
        },
      },
    },
  },
})

export default theme
