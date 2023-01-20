import {
  AspectRatio,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import BackArrowTitle from '../../../../components/atoms/BackArrowTitle'
import PrimaryButton from '../../../../components/atoms/PrimaryButton'
import { AuthContext } from '../../../_app'
import StarIcon from '@mui/icons-material/Star'
import GradientIcon from '../../../../components/atoms/GradientIcon'

const voteProjects = [
  {
    id: 1,
    categories: ['Webアプリ', 'ネイティブアプリ'],
    title: 'ビール販売アプリ',
    siteUrl: '',
    githubUrl: '',
    skils: [
      {
        id: 1,
        text: 'Next.js',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
      },
      {
        id: 2,
        text: 'TypeScript',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
      },
      {
        id: 3,
        text: 'Firebase',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
      },
    ],
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
  },
  {
    id: 2,
    categories: ['Webアプリ', 'ネイティブアプリ'],
    title: 'ビール販売アプリ',
    siteUrl: '',
    githubUrl: '',
    skils: [
      {
        id: 1,
        text: 'Next.js',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
      },
      {
        id: 2,
        text: 'TypeScript',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
      },
      {
        id: 3,
        text: 'Firebase',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
      },
    ],
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
  },
  {
    id: 3,
    categories: ['Webアプリ', 'ネイティブアプリ'],
    title: 'ビール販売アプリ',
    siteUrl: '',
    githubUrl: '',
    skils: [
      {
        id: 1,
        text: 'Next.js',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
      },
      {
        id: 2,
        text: 'TypeScript',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
      },
      {
        id: 3,
        text: 'Firebase',
        thumbnail:
          'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
      },
    ],
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
  },
]

const ProjectVoteForm = () => {
  const router = useRouter()
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [voteProjectIndex, setVoteProjectIndex] = useState(1)
  const [ratingValue, setRatingValue] = useState(0)
  const { setIsModalVisible } = useContext(AuthContext)
  const handleVoteProject = () => {
    setIsModalVisible(true)
    router.push(`/projects/${id}`)
  }
  const nextVoteProject = () => {
    if (voteProjectIndex < 3) {
      setVoteProjectIndex(voteProjectIndex + 1)
    } else {
      setVoteProjectIndex(1)
    }
  }
  const backVoteProject = () => {
    if (voteProjectIndex > 1) {
      setVoteProjectIndex(voteProjectIndex - 1)
    } else {
      setVoteProjectIndex(3)
    }
  }
  return (
    <Flex direction='column' py='56px' px='80px'>
      <Flex justifyContent='space-between' alignItems='center' mb='16px'>
        <BackArrowTitle
          text='プロジェクト詳細'
          onClick={() => router.push(`/projects/${id}`)}
        />
        <HStack spacing='16px' alignSelf='flex-end' alignItems='center'>
          <Icon
            as={IoIosArrowBack}
            onClick={backVoteProject}
            cursor='pointer'
          />
          <Text
            p='4px 12px'
            bgGradient={
              voteProjectIndex === 1 && 'linear(to-b, orange.300, orange.500)'
            }
            bg={voteProjectIndex !== 1 && 'gray.500'}
            color='white'
            fontSize='12px'
            fontWeight='bold'
            borderRadius='sm'
            onClick={() => setVoteProjectIndex(1)}
            cursor={voteProjectIndex !== 1 && 'pointer'}
          >
            投票①
          </Text>
          <Text
            p='4px 12px'
            bgGradient={
              voteProjectIndex === 2 && 'linear(to-b, orange.300, orange.500)'
            }
            bg={voteProjectIndex !== 2 && 'gray.500'}
            color='white'
            fontSize='12px'
            fontWeight='bold'
            borderRadius='sm'
            onClick={() => setVoteProjectIndex(2)}
            cursor={voteProjectIndex !== 2 && 'pointer'}
          >
            投票②
          </Text>
          <Text
            p='4px 12px'
            bgGradient={
              voteProjectIndex === 3 && 'linear(to-b, orange.300, orange.500)'
            }
            bg={voteProjectIndex !== 3 && 'gray.500'}
            color='white'
            fontSize='12px'
            fontWeight='bold'
            borderRadius='sm'
            onClick={() => setVoteProjectIndex(3)}
            cursor={voteProjectIndex !== 3 && 'pointer'}
          >
            投票③
          </Text>
          <Icon
            as={IoIosArrowForward}
            onClick={nextVoteProject}
            cursor='pointer'
          />
        </HStack>
      </Flex>
      {voteProjectIndex === 1 && (
        <>
          <Flex
            w='100%'
            bg='white'
            p='24px'
            borderRadius='lg'
            direction='column'
            mb='16px'
          >
            <Flex direction='column'>
              <Text fontSize='22px' fontWeight='bold' color='blue.800' mb='8px'>
                {'{プロジェクト名}'}の評価
              </Text>
              <Text fontSize='14px' mb='2px'>
                ルールを守って下の作品の評価を行ってください。
              </Text>
              <Flex fontSize='12px' direction='column' justifyContent='center'>
                <Text>
                  ※
                  全部で３つの作品の評価を行います。評価を完了させない場合、あなたの参加は無効になります。
                </Text>
                <Text>※ 誹謗中傷はやめましょう。</Text>
              </Flex>
            </Flex>
            <Flex w='100%' h='1px' bg='gray.400' my='32px' />
            <Flex direction='column'>
              <Text
                fontSize='22px'
                fontWeight='bold'
                color='blue.800'
                mb='16px'
              >
                スキルの評価
              </Text>
              <HStack spacing='40px'>
                <Flex direction='column'>
                  <Text mb='6px'>ビジネス</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>技術</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>発想</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>デザイン</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                  </HStack>
                </Flex>
              </HStack>
            </Flex>
            <Flex w='100%' h='1px' bg='gray.200' my='32px' />
            <Flex direction='column'>
              <Text
                fontSize='22px'
                fontWeight='bold'
                color='blue.800'
                mb='16px'
              >
                自由記述
              </Text>
              <Textarea
                fontSize='14px'
                height='100px'
                placeholder='作品に関してもコメントをかいてください。'
                _placeholder={{ color: 'gray.400' }}
                focusBorderColor='gray.400'
              />
            </Flex>
          </Flex>
          <Flex
            w='100%'
            bg='white'
            p='24px'
            borderRadius='lg'
            direction='column'
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
            <Image
              w='100%'
              h='385px'
              bg='gray.400'
              alt=''
              borderRadius='lg'
              mb='32px'
            />
            <Flex direction='column' mb='32px'>
              <Text fontSize='12px' fontWeight='bold' mb='8px'>
                作品URL
              </Text>
              <Link
                bgClip='text'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                fontSize='14px'
                cursor='pointer'
                target='_blank'
                href='https://google.com'
              >
                http://wwjhdsfhshfl.com
              </Link>
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
        </>
      )}
      {voteProjectIndex === 2 && (
        <>
          <Flex
            w='100%'
            bg='white'
            p='24px'
            borderRadius='lg'
            direction='column'
            mb='16px'
          >
            <Flex direction='column'>
              <Text fontSize='22px' fontWeight='bold' color='blue.800' mb='8px'>
                {'{プロジェクト名}'}の評価
              </Text>
              <Text fontSize='14px' mb='2px'>
                ルールを守って下の作品の評価を行ってください。
              </Text>
              <Flex fontSize='12px' direction='column' justifyContent='center'>
                <Text>
                  ※
                  全部で３つの作品の評価を行います。評価を完了させない場合、あなたの参加は無効になります。
                </Text>
                <Text>※ 誹謗中傷はやめましょう。</Text>
              </Flex>
            </Flex>
            <Flex w='100%' h='1px' bg='gray.400' my='32px' />
            <Flex direction='column'>
              <Text
                fontSize='22px'
                fontWeight='bold'
                color='blue.800'
                mb='16px'
              >
                スキルの評価
              </Text>
              <HStack spacing='40px'>
                <Flex direction='column'>
                  <Text mb='6px'>ビジネス</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>技術</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>発想</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>デザイン</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
              </HStack>
            </Flex>
            <Flex w='100%' h='1px' bg='gray.200' my='32px' />
            <Flex direction='column'>
              <Text
                fontSize='22px'
                fontWeight='bold'
                color='blue.800'
                mb='16px'
              >
                自由記述
              </Text>
              <Textarea
                fontSize='14px'
                height='100px'
                placeholder='作品に関してもコメントをかいてください。'
                _placeholder={{ color: 'gray.400' }}
                focusBorderColor='gray.400'
              />
            </Flex>
          </Flex>
          <Flex
            w='100%'
            bg='white'
            p='24px'
            borderRadius='lg'
            direction='column'
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
              コーラ販売アプリ
            </Heading>
            <Image
              w='100%'
              h='385px'
              bg='gray.400'
              alt=''
              borderRadius='lg'
              mb='32px'
            />
            <Flex direction='column' mb='32px'>
              <Text fontSize='12px' fontWeight='bold' mb='8px'>
                作品URL
              </Text>
              <Link
                bgClip='text'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                fontSize='14px'
                cursor='pointer'
                target='_blank'
                href='https://google.com'
              >
                http://wwjhdsfhshfl.com
              </Link>
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
        </>
      )}
      {voteProjectIndex === 3 && (
        <>
          <Flex
            w='100%'
            bg='white'
            p='24px'
            borderRadius='lg'
            direction='column'
            mb='16px'
          >
            <Flex direction='column'>
              <Text fontSize='22px' fontWeight='bold' color='blue.800' mb='8px'>
                {'{プロジェクト名}'}の評価
              </Text>
              <Text fontSize='14px' mb='2px'>
                ルールを守って下の作品の評価を行ってください。
              </Text>
              <Flex fontSize='12px' direction='column' justifyContent='center'>
                <Text>
                  ※
                  全部で３つの作品の評価を行います。評価を完了させない場合、あなたの参加は無効になります。
                </Text>
                <Text>※ 誹謗中傷はやめましょう。</Text>
              </Flex>
            </Flex>
            <Flex w='100%' h='1px' bg='gray.400' my='32px' />
            <Flex direction='column'>
              <Text
                fontSize='22px'
                fontWeight='bold'
                color='blue.800'
                mb='16px'
              >
                スキルの評価
              </Text>
              <HStack spacing='40px'>
                <Flex direction='column'>
                  <Text mb='6px'>ビジネス</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>技術</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>発想</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
                <Flex direction='column'>
                  <Text mb='6px'>デザイン</Text>
                  <HStack spacing='1px'>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon
                        sx={{ fontSize: '28px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <GradientIcon>
                      <StarIcon sx={{ fontSize: '28px', fill: '#ccc' }} />
                    </GradientIcon>
                  </HStack>
                </Flex>
              </HStack>
            </Flex>
            <Flex w='100%' h='1px' bg='gray.200' my='32px' />
            <Flex direction='column'>
              <Text
                fontSize='22px'
                fontWeight='bold'
                color='blue.800'
                mb='16px'
              >
                自由記述
              </Text>
              <Textarea
                fontSize='14px'
                height='100px'
                placeholder='作品に関してもコメントをかいてください。'
                _placeholder={{ color: 'gray.400' }}
                focusBorderColor='gray.400'
              />
            </Flex>
          </Flex>
          <Flex
            w='100%'
            bg='white'
            p='24px'
            borderRadius='lg'
            direction='column'
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
              ラムネ販売アプリ
            </Heading>
            <Image
              w='100%'
              h='385px'
              bg='gray.400'
              alt=''
              borderRadius='lg'
              mb='32px'
            />
            <Flex direction='column' mb='32px'>
              <Text fontSize='12px' fontWeight='bold' mb='8px'>
                作品URL
              </Text>
              <Link
                bgClip='text'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                fontSize='14px'
                cursor='pointer'
                target='_blank'
                href='https://google.com'
              >
                http://wwjhdsfhshfl.com
              </Link>
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
        </>
      )}
    </Flex>
  )
}

export default ProjectVoteForm
