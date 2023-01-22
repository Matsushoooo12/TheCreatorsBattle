import { SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import TabItem from '../../components/atoms/TabItem'
import ModalCard from '../../components/molecules/ModalCard'
import NewCreateCard from '../../components/molecules/NewCreateCard'
import TabItems from '../../components/molecules/TabItems'

const allList = [
  {
    id: 1,
    content: 'JavaScriptのクロージャがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 2,
    content: 'C++のポインタがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 3,
    content: 'Pythonのデコレータがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 4,
    content: 'Javaのインターフェイスがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 5,
    content: 'SQLのJOINがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 6,
    content: 'gitのブランチ管理がわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 7,
    content: 'HTTPのステータスコードがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 8,
    content: 'Linuxのシェルスクリプトがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
]

const doneList = [
  {
    id: 1,
    content: 'JavaScriptのクロージャがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 2,
    content: 'C++のポインタがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 3,
    content: 'SQLのJOINがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 4,
    content: 'gitのブランチ管理がわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
]

const waitList = [
  {
    id: 1,
    content: 'Pythonのデコレータがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 2,
    content: 'Javaのインターフェイスがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 3,
    content: 'HTTPのステータスコードがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
  {
    id: 4,
    content: 'Linuxのシェルスクリプトがわかりません',
    createdAt: '2023/01/01 11:00',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    number: 3,
  },
]

const allList2 = []
const doneList2 = []
const waitList2 = []

const QuestionList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const { id } = router.query
  const [questionIndex, setQuestionIndex] = useState(0)
  const toggleQuestion = (index) => {
    setQuestionIndex(index)
  }
  return (
    <>
      <Flex direction='column' py='56px'>
        <Text color='blue.800' fontWeight='bold' fontSize='22px' mb='16px'>
          質問箱一覧
        </Text>
        <InputGroup color='black' bg='white' colorScheme='gray' mb='16px'>
          <InputLeftElement
            pointerEvents='none'
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color='gray.300' />}
          />
          <Input
            type='text'
            placeholder='質問をキーワード検索'
            focusBorderColor='gray.200'
            borderRadius='md'
            boxShadow='md'
            py='8px'
            fontSize='14px'
            _placeholder={{ color: 'gray.400' }}
          />
        </InputGroup>
        <Flex direction='column'>
          <Flex
            w='100%'
            bg='white'
            borderTopRadius='md'
            boxShadow='md'
            direction='column'
            p='24px 24px 0'
          >
            <TabItems mb='0px'>
              <TabItem
                title='すべて'
                onClick={() => toggleQuestion(0)}
                tabState={questionIndex}
                tabIndex={0}
              />
              <TabItem
                title='解決済み'
                onClick={() => toggleQuestion(1)}
                tabState={questionIndex}
                tabIndex={1}
                dataLength={3}
              />
              <TabItem
                title='回答待ち'
                onClick={() => toggleQuestion(2)}
                tabState={questionIndex}
                tabIndex={2}
                dataLength={5}
              />
            </TabItems>
            <Flex w='100%' h='1px' bg='gray.200' />
          </Flex>
          <Flex
            h='100%'
            bg='white'
            px='24px'
            direction='column'
            borderBottomRadius='md'
            boxShadow='md'
          >
            <Flex direction='column' w='100%'>
              {questionIndex === 0 && (
                <>
                  {allList?.map((list) => (
                    <Flex
                      key={list.id}
                      direction='column'
                      color='black'
                      py='16px'
                      fontSize='14px'
                      borderBottom='1px solid #000'
                      borderColor='gray.200'
                    >
                      <Text
                        mb='4px'
                        color='gray.400'
                        fontSize='12px'
                        fontWeight='bold'
                      >
                        {list.createdAt}
                      </Text>
                      <Text
                        fontWeight='bold'
                        fontSize='12px'
                        color='gray.400'
                        mb='4px'
                      >
                        {list.categories?.map((c, index) =>
                          index === 0 ? c : `・${c}`,
                        )}
                      </Text>
                      <Flex
                        fontWeight='bold'
                        mb={'6px'}
                        onClick={() => router.push(`/questions/${list.id}`)}
                        cursor='pointer'
                      >
                        <Text>{list.content}</Text>
                      </Flex>
                      <HStack>
                        <Flex>
                          <Text
                            p='4px 8px'
                            border='2px solid #000'
                            borderColor='blue.300'
                            borderRadius='full'
                            fontSize='12px'
                            color='blue.300'
                          >
                            💰 300pt
                          </Text>
                        </Flex>
                        <Flex>
                          <Text
                            p='4px 8px'
                            border='2px solid #000'
                            borderColor='red.300'
                            borderRadius='full'
                            fontSize='12px'
                            color='red.300'
                          >
                            🙋‍♀️ {list.number}人
                          </Text>
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
                              src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                              alt=''
                            />
                            <Text bg='white' fontSize='12px'>
                              Next.js
                            </Text>
                          </HStack>
                        </Flex>
                      </HStack>
                    </Flex>
                  ))}
                </>
              )}
              {questionIndex === 1 && (
                <>
                  {doneList?.map((list) => (
                    <Flex
                      key={list.id}
                      direction='column'
                      color='black'
                      py='16px'
                      fontSize='14px'
                      borderBottom='1px solid #000'
                      borderColor='gray.200'
                    >
                      <Text
                        mb='4px'
                        color='gray.400'
                        fontSize='12px'
                        fontWeight='bold'
                      >
                        {list.createdAt}
                      </Text>
                      <Text
                        fontWeight='bold'
                        fontSize='12px'
                        color='gray.400'
                        mb='4px'
                      >
                        {list.categories?.map((c, index) =>
                          index === 0 ? c : `・${c}`,
                        )}
                      </Text>
                      <Flex fontWeight='bold' mb={'6px'}>
                        <Text>{list.content}</Text>
                      </Flex>
                      <HStack>
                        <Flex>
                          <Text
                            p='4px 8px'
                            border='2px solid #000'
                            borderColor='blue.300'
                            borderRadius='full'
                            fontSize='12px'
                            color='blue.300'
                          >
                            💰 300pt
                          </Text>
                        </Flex>
                        <Flex>
                          <Text
                            p='4px 8px'
                            border='2px solid #000'
                            borderColor='red.300'
                            borderRadius='full'
                            fontSize='12px'
                            color='red.300'
                          >
                            🙋‍♀️ {list.number}人
                          </Text>
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
                              src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                              alt=''
                            />
                            <Text bg='white' fontSize='12px'>
                              Next.js
                            </Text>
                          </HStack>
                        </Flex>
                      </HStack>
                    </Flex>
                  ))}
                </>
              )}
              {questionIndex === 2 && (
                <>
                  {waitList?.map((list) => (
                    <Flex
                      key={list.id}
                      direction='column'
                      color='black'
                      py='16px'
                      fontSize='14px'
                      borderBottom='1px solid #000'
                      borderColor='gray.200'
                    >
                      <Text
                        mb='4px'
                        color='gray.400'
                        fontSize='12px'
                        fontWeight='bold'
                      >
                        {list.createdAt}
                      </Text>
                      <Text
                        fontWeight='bold'
                        fontSize='12px'
                        color='gray.400'
                        mb='4px'
                      >
                        {list.categories?.map((c, index) =>
                          index === 0 ? c : `・${c}`,
                        )}
                      </Text>
                      <Flex fontWeight='bold' mb={'6px'}>
                        <Text>{list.content}</Text>
                      </Flex>
                      <HStack>
                        <Flex>
                          <Text
                            p='4px 8px'
                            border='2px solid #000'
                            borderColor='blue.300'
                            borderRadius='full'
                            fontSize='12px'
                            color='blue.300'
                          >
                            💰 300pt
                          </Text>
                        </Flex>
                        <Flex>
                          <Text
                            p='4px 8px'
                            border='2px solid #000'
                            borderColor='red.300'
                            borderRadius='full'
                            fontSize='12px'
                            color='red.300'
                          >
                            🙋‍♀️ {list.number}人
                          </Text>
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
                              src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                              alt=''
                            />
                            <Text bg='white' fontSize='12px'>
                              Next.js
                            </Text>
                          </HStack>
                        </Flex>
                      </HStack>
                    </Flex>
                  ))}
                </>
              )}
              {questionIndex === 3 && (
                <NewCreateCard
                  title='質問してみましょう！'
                  buttonText='質問をする'
                  onClick={() => router.push('/questions/new')}
                  isBoxShadow={false}
                >
                  <Text>
                    開発でなにかお困りごとはありませんか？みんなに質問してみよう！
                  </Text>
                  <Text>
                    ほかのクリエイターの悩みに答えると、ポイントがもらえる✨
                  </Text>
                </NewCreateCard>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ModalCard
        cancelButtonText='閉じる'
        title='質問を投稿しました'
        titleEmoji='🎉'
        isOpen={isOpen}
        onClose={onClose}
        size='lg'
      >
        <Flex direction='column' color='black' fontWeight='bold'>
          <Text>開発お疲れさま！</Text>
          <Text>回答が帰ってくるまで、一息ついてみる？</Text>
        </Flex>
      </ModalCard>
    </>
  )
}

export default QuestionList
