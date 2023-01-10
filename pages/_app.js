import { ChakraProvider, Flex } from '@chakra-ui/react'
import MainContainer from '../components/templates/MainContainer'
import '../styles/globals.css'
import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <MainContainer>
        <Flex suppressHydrationWarning bg="gray.100" h="100%" direction="column" px="24px">
          <Component {...pageProps} />
        </Flex>
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
