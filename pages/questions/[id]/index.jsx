import {
  Avatar,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import BackArrowTitle from '../../../components/atoms/BackArrowTitle'
import PrimaryButton from '../../../components/atoms/PrimaryButton'
import { AiOutlineHeart, AiFillMessage } from 'react-icons/ai'

const DetailQuestion = () => {
  const router = useRouter()
  return (
    <Flex direction='column' py='56px' px='80px'>
      <BackArrowTitle
        onClick={() => router.push('/questions')}
        text='質問箱一覧'
      />
      <Flex
        w='100%'
        bg='white'
        p='24px'
        borderRadius='lg'
        direction='column'
        mb='32px'
      >
        <Flex alignItems='center' mb='8px'>
          <Text fontWeight='bold' fontSize='12px' color='gray.400'>
            {/* {projectItem3.categories?.map((c, index) =>
          index === 0 ? c : `・${c}`,
        )} */}
            ネイティブアプリ
          </Text>
        </Flex>
        <Heading color='blue.800' fontSize='22px' mb='32px'>
          ビール販売アプリ
        </Heading>
        <Flex direction='column' mb='32px'>
          <Text fontSize='12px' fontWeight='bold' mb='8px'>
            作品URL
          </Text>
          <Text
            bgClip='text'
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            fontSize='14px'
          >
            http://wwjhdsfhshfl.com
          </Text>
        </Flex>
        {/* テキストエリア */}
        <Flex direction='column' fontSize='14px' mb='32px'>
          <Text>
            ビールが大好きで自分で輸入したものを販売してみたくて、作成しました！
          </Text>
          <Text mb='16px'>
            エンジニア、PM、デザイナーの友達４人でも共同制作です。
          </Text>
          <Text mb='16px'>使用言語：react / </Text>
          <Text>触ってみたい方はこちら → https/gkhghasgvabvjdbvkasef</Text>
        </Flex>
        <HStack>
          <Flex
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            p='2px'
            borderRadius='full'
            alignItems='center'
            justifyContent='center'
          >
            <HStack
              borderRadius='full'
              bg='white'
              alignItems='center'
              justifyContent='center'
              p='4px 8px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                alt=''
              />
              <Text bg='white' fontSize='12px'>
                Next.js
              </Text>
            </HStack>
          </Flex>
          <Flex
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            p='2px'
            borderRadius='full'
            alignItems='center'
            justifyContent='center'
          >
            <HStack
              borderRadius='full'
              bg='white'
              alignItems='center'
              justifyContent='center'
              p='4px 8px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                alt=''
              />
              <Text bg='white' fontSize='12px'>
                TypeScript
              </Text>
            </HStack>
          </Flex>
          <Flex
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            p='2px'
            borderRadius='full'
            alignItems='center'
            justifyContent='center'
          >
            <HStack
              borderRadius='full'
              bg='white'
              alignItems='center'
              justifyContent='center'
              p='4px 8px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                alt=''
              />
              <Text bg='white' fontSize='12px'>
                Firebase
              </Text>
            </HStack>
          </Flex>
        </HStack>
      </Flex>
      <Flex w='100%' bg='white' p='24px' borderRadius='lg' direction='column'>
        <Flex direction='column' w='100%'>
          <HStack spacing='8px' alignItems='center' mb='16px'>
            <Avatar h='32px' w='32px' />
            <Text>まつもとしょうご</Text>
            <Text>2022/01/01</Text>
          </HStack>
          <Flex direction='column' fontSize='14px' mb='16px'>
            <Text>
              テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
            </Text>
            <Text>
              テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
            </Text>
          </Flex>
          <HStack spacing='8px' fontSize='18px'>
            <Icon as={AiOutlineHeart} />
            <Icon as={AiFillMessage} />
          </HStack>
        </Flex>
        <Flex w='100%' h='1px' bg='gray.400' my='16px' />
        <Flex direction='column'>
          <HStack spacing='8px' alignItems='center' mb='16px'>
            <Avatar h='32px' w='32px' />
            <Text>まつもとしょうご</Text>
            <Text>2022/01/01</Text>
          </HStack>
          <Textarea
            placeholder='何でも気になったことを投稿してみましょう'
            mb='24px'
            h='200px'
          />
          <Flex justifyContent='flex-end'>
            <PrimaryButton>投稿する</PrimaryButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DetailQuestion
