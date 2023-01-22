import {
  Avatar,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import TabItem from '../atoms/TabItem'
import TabItems from '../molecules/TabItems'

const TabContainer = (props) => {
  const { tabIndex, setTabIndex, index } = props
  const handleToggle = () => {
    setTabIndex(index)
  }
  return (
    <Flex direction='column'>
      <Flex w='100%' direction='column' p='24px 24px 0' bg='white'>
        <TabItems>
          <TabItem
            title='プロジェクト概要'
            onClick={() => toggleDone(0)}
            tabState={doneIndex}
            tabIndex={0}
          />
          <TabItem
            title='作品一覧'
            onClick={() => toggleDone(1)}
            tabState={doneIndex}
            tabIndex={1}
          />
        </TabItems>
        <Flex w='100%' h='1px' bg='gray.200' />
      </Flex>
      <Flex
        h='78vh'
        overflowX='scroll'
        bg='white'
        p='24px'
        borderRadius='lg'
        direction='column'
        position='relative'
      >
        <Flex direction='column' w='100%'>
          {doneIndex === 0 && (
            <>
              <Flex alignItems='center' mb='8px'>
                <Text
                  fontSize='12px'
                  fontWeight='bold'
                  borderRadius='md'
                  p='4px 12px'
                  bgGradient={gradientColor()}
                  mr='8px'
                  color='white'
                >
                  {statusText()}
                </Text>
                <Text fontWeight='bold' fontSize='12px' color='gray.400'>
                  {projectItem4.categories?.map((c, index) =>
                    index === 0 ? c : `・${c}`,
                  )}
                </Text>
              </Flex>
              <Heading color='blue.800' fontSize='22px' mb='32px'>
                {projectItem4.title}
              </Heading>
              <Image
                w='100%'
                h='385px'
                bg='gray.400'
                alt=''
                borderRadius='lg'
                mb='32px'
              />
              <Flex color='black' mb='32px' direction='column'>
                <Text>{projectItem4.summary}</Text>
              </Flex>
              <Flex direction='column' mb='32px'>
                <Text
                  fontSize='18px'
                  fontWeight='bold'
                  color='blue.800'
                  mb='10px'
                >
                  参加におすすめな人
                </Text>
                <Flex color='black' direction='column'>
                  <Text>{projectItem4.recommendation}</Text>
                </Flex>
              </Flex>
              <Flex direction='column' mb='32px'>
                <Text
                  fontSize='18px'
                  fontWeight='bold'
                  color='blue.800'
                  mb='10px'
                >
                  ルール
                </Text>
                <Flex color='black' direction='column'>
                  <Text>{projectItem4.rule}</Text>
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Text
                  fontSize='18px'
                  fontWeight='bold'
                  color='blue.800'
                  mb='10px'
                >
                  提出形式
                </Text>
                <Flex color='black' direction='column'>
                  {projectItem4.formats?.map((f) => (
                    <Text key={f.id}>{f.text}</Text>
                  ))}
                </Flex>
              </Flex>
            </>
          )}
          {doneIndex === 1 && (
            <>
              <Flex direction='column'>
                <Flex
                  h='240px'
                  w='100%'
                  borderRadius='lg'
                  boxShadow='lg'
                  mb='16px'
                  borderWidth='1px'
                  borderColor='gray.200'
                >
                  <Flex w='50%' position='relative'>
                    <Image
                      w='100%'
                      bg='gray.600'
                      alt=''
                      borderLeftRadius='lg'
                    />
                    <Text fontSize='56px' position='absolute' top='-3' left='8'>
                      🥇
                    </Text>
                  </Flex>
                  <Flex
                    direction='column'
                    p='16px 12px'
                    alignItems='center'
                    w='50%'
                    justifyContent='center'
                    borderColor='gray.200'
                  >
                    <Flex direction='column'>
                      <Text
                        fontSize='18px'
                        fontWeight='bold'
                        mb='8px'
                        onClick={() => router.push(`/projects/1/works/1`)}
                        cursor='pointer'
                      >
                        ヨガを楽しくするアプリ
                      </Text>
                      <HStack mb='48px'>
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
                      <HStack spacing='4px'>
                        <Avatar w='20px' h='20px' />
                        <Text fontSize='12px'>やまもとみずき</Text>
                      </HStack>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction='column'>
                  <HStack w='100%' spacing='16px' mb='16px'>
                    <Flex
                      w='50%'
                      borderRadius='lg'
                      boxShadow='lg'
                      direction='column'
                      borderColor='gray.200'
                    >
                      <Flex w='100%' position='relative'>
                        <Image
                          w='100%'
                          bg='gray.600'
                          alt=''
                          borderTopRadius='lg'
                          h='180px'
                        />
                        <Text
                          fontSize='56px'
                          position='absolute'
                          top='-3'
                          left='8'
                        >
                          🥈
                        </Text>
                      </Flex>
                      <Flex
                        direction='column'
                        p='16px 16px'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Flex direction='column' justifyContent='center'>
                          <Text fontSize='18px' fontWeight='bold' mb='4px'>
                            カロリーを減らすアプリ
                          </Text>
                          <HStack mb='24px'>
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
                          <HStack spacing='4px'>
                            <Avatar w='20px' h='20px' />
                            <Text fontSize='12px'>やまもとみずき</Text>
                          </HStack>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      w='50%'
                      borderRadius='lg'
                      boxShadow='lg'
                      direction='column'
                      borderColor='gray.200'
                    >
                      <Flex w='100%' position='relative'>
                        <Image
                          w='100%'
                          bg='gray.600'
                          alt=''
                          borderTopRadius='lg'
                          h='180px'
                        />
                        <Text
                          fontSize='56px'
                          position='absolute'
                          top='-3'
                          left='8'
                        >
                          🥉
                        </Text>
                      </Flex>
                      <Flex
                        direction='column'
                        p='16px 16px'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Flex direction='column' justifyContent='center'>
                          <Text fontSize='18px' fontWeight='bold' mb='4px'>
                            フットボールを楽しくするアプリ
                          </Text>
                          <HStack mb='24px'>
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
                          <HStack spacing='4px'>
                            <Avatar w='20px' h='20px' />
                            <Text fontSize='12px'>やまもとみずき</Text>
                          </HStack>
                        </Flex>
                      </Flex>
                    </Flex>
                  </HStack>
                  <HStack w='100%' spacing='16px'>
                    <Flex
                      w='50%'
                      borderRadius='lg'
                      boxShadow='lg'
                      direction='column'
                      borderColor='gray.200'
                    >
                      <Flex w='100%' position='relative'>
                        <Image
                          w='100%'
                          bg='gray.600'
                          alt=''
                          borderTopRadius='lg'
                          h='180px'
                        />
                        <Center
                          fontSize='22px'
                          position='absolute'
                          top='4'
                          left='8'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          w='40px'
                          h='40px'
                          borderRadius='full'
                          color='white'
                        >
                          <Text fontWeight='bold'>4</Text>
                        </Center>
                      </Flex>
                      <Flex
                        direction='column'
                        p='16px 16px'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Flex direction='column' justifyContent='center'>
                          <Text fontSize='18px' fontWeight='bold' mb='4px'>
                            ダイエットを楽しくするアプリ
                          </Text>
                          <HStack mb='24px'>
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
                          <HStack spacing='4px'>
                            <Avatar w='20px' h='20px' />
                            <Text fontSize='12px'>やまもとみずき</Text>
                          </HStack>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      w='50%'
                      borderRadius='lg'
                      boxShadow='lg'
                      direction='column'
                      borderColor='gray.200'
                    >
                      <Flex w='100%' position='relative'>
                        <Image
                          w='100%'
                          bg='gray.600'
                          alt=''
                          borderTopRadius='lg'
                          h='180px'
                        />
                        <Center
                          fontSize='22px'
                          position='absolute'
                          top='4'
                          left='8'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          w='40px'
                          h='40px'
                          borderRadius='full'
                          color='white'
                        >
                          <Text fontWeight='bold'>5</Text>
                        </Center>
                      </Flex>
                      <Flex
                        direction='column'
                        p='16px 16px'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Flex direction='column' justifyContent='center'>
                          <Text fontSize='18px' fontWeight='bold' mb='4px'>
                            健康的な食事を楽しくするアプリ
                          </Text>
                          <HStack mb='24px'>
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
                          <HStack spacing='4px'>
                            <Avatar w='20px' h='20px' />
                            <Text fontSize='12px'>やまもとみずき</Text>
                          </HStack>
                        </Flex>
                      </Flex>
                    </Flex>
                  </HStack>
                </Flex>
                <Flex w='100%' h='1px' bg='gray.200' my='32px' />
                <Flex direction='column'>
                  <HStack w='100%' spacing='16px' mb='16px'>
                    <Flex
                      w='33%'
                      borderRadius='lg'
                      boxShadow='lg'
                      borderColor='gray.200'
                      direction='column'
                    >
                      <Image
                        w='100%'
                        bg='gray.600'
                        alt=''
                        borderTopRadius='lg'
                        h='122px'
                      />
                      <Flex direction='column' p='16px 12px'>
                        <Text fontWeight='bold' mb='4px'>
                          筋トレが楽しくなってもりもりもり
                        </Text>
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
                        </HStack>
                      </Flex>
                    </Flex>
                    <Flex
                      w='33%'
                      borderRadius='lg'
                      boxShadow='lg'
                      borderColor='gray.200'
                      direction='column'
                    >
                      <Image
                        w='100%'
                        bg='gray.600'
                        alt=''
                        borderTopRadius='lg'
                        h='122px'
                      />
                      <Flex direction='column' p='16px 12px'>
                        <Text fontWeight='bold' mb='4px'>
                          筋トレが楽しくなってもりもりもり
                        </Text>
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
                        </HStack>
                      </Flex>
                    </Flex>
                    <Flex
                      w='33%'
                      borderRadius='lg'
                      boxShadow='lg'
                      borderColor='gray.200'
                      direction='column'
                    >
                      <Image
                        w='100%'
                        bg='gray.600'
                        alt=''
                        borderTopRadius='lg'
                        h='122px'
                      />
                      <Flex direction='column' p='16px 12px'>
                        <Text fontWeight='bold' mb='4px'>
                          筋トレが楽しくなってもりもりもり
                        </Text>
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
                        </HStack>
                      </Flex>
                    </Flex>
                  </HStack>
                  <HStack w='100%' spacing='16px' mb='16px'>
                    <Flex
                      w='33%'
                      borderRadius='lg'
                      boxShadow='lg'
                      borderColor='gray.200'
                      direction='column'
                    >
                      <Image
                        w='100%'
                        bg='gray.600'
                        alt=''
                        borderTopRadius='lg'
                        h='122px'
                      />
                      <Flex direction='column' p='16px 12px'>
                        <Text fontWeight='bold' mb='4px'>
                          筋トレが楽しくなってもりもりもり
                        </Text>
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
                        </HStack>
                      </Flex>
                    </Flex>
                    <Flex
                      w='33%'
                      borderRadius='lg'
                      boxShadow='lg'
                      borderColor='gray.200'
                      direction='column'
                    >
                      <Image
                        w='100%'
                        bg='gray.600'
                        alt=''
                        borderTopRadius='lg'
                        h='122px'
                      />
                      <Flex direction='column' p='16px 12px'>
                        <Text fontWeight='bold' mb='4px'>
                          筋トレが楽しくなってもりもりもり
                        </Text>
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
                        </HStack>
                      </Flex>
                    </Flex>
                    <Flex
                      w='33%'
                      borderRadius='lg'
                      boxShadow='lg'
                      borderColor='gray.200'
                      direction='column'
                    >
                      <Image
                        w='100%'
                        bg='gray.600'
                        alt=''
                        borderTopRadius='lg'
                        h='122px'
                      />
                      <Flex direction='column' p='16px 12px'>
                        <Text fontWeight='bold' mb='4px'>
                          筋トレが楽しくなってもりもりもり
                        </Text>
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
                        </HStack>
                      </Flex>
                    </Flex>
                  </HStack>
                </Flex>
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TabContainer
