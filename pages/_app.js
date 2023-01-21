import { Center, ChakraProvider, Flex, Image, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import MainContainer from '../components/templates/MainContainer'
import { useGetUrl } from '../hooks/useGetUrl'
import '../styles/globals.css'
import theme from '../theme/theme'

export const AuthContext = createContext()

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isSSR, setIsSSR] = useState(true)
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { URL } = useGetUrl()
  useEffect(() => {
    setIsSSR(false)
  }, [])
  if (isSSR) {
    return (
      <ChakraProvider>
        <Center h='100vh' w='100%' bg='white'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Center>
      </ChakraProvider>
    )
  }
  return (
    <AuthContext.Provider
      value={{
        isLogin,
        isLoading,
        setIsLoading,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      <ChakraProvider theme={theme}>
        {!isSSR && (
          <>
            {(isLogin === false &&
              URL === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/`) ||
            URL === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/signup` ||
            URL === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/signin` ||
            URL === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/signup/new` ||
            URL === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/signin/new` ||
            URL === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/contents` ? (
              <Flex
                h='100vh'
                w='100%'
                bg='white'
                justifyContent='center'
                alignItems='center'
                direction='column'
                position='relative'
              >
                <Component {...pageProps} />
                {/* <Image
                  cursor='pointer'
                  onClick={() => router.push('/projects')}
                  mx='2px'
                  mb='4px'
                  h='24px'
                  src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
                  alt=''
                  position='absolute'
                  top='36px'
                  left='56px'
                /> */}
              </Flex>
            ) : (
              <MainContainer>
                <Flex bg='gray.100' h='100%' direction='column' px='24px'>
                  <Component {...pageProps} />
                </Flex>
              </MainContainer>
            )}
          </>
        )}
      </ChakraProvider>
    </AuthContext.Provider>
  )
}

export default MyApp
