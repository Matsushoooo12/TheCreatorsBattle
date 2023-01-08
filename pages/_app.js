import { ChakraProvider } from '@chakra-ui/react'
import MainContainer from '../components/templates/MainContainer'
import '../styles/globals.css'
import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
