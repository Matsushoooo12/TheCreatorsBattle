import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import ModalCard from '../../../../../components/molecules/ModalCard'
import SkilCard from '../../../../../components/molecules/SkilCard'

const skilList = [
  {
    id: 1,
    text: 'Next.js',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    level: 4,
  },
  {
    id: 2,
    text: 'JavaScript',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213210140-82e95eca-0811-4918-b08f-a72fb1808784.png',
    level: 4,
  },
  {
    id: 3,
    text: 'Kotlin',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211631223-2f47b231-1c12-48d6-9067-68392df5c325.png',
    level: 3,
  },
  {
    id: 4,
    text: 'AWS',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211631369-0d2cb214-498d-4f76-9083-c56434341f24.png',
    level: 4,
  },
  {
    id: 5,
    text: 'Firebase',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    level: 4,
  },
  {
    id: 6,
    text: 'figma',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213248435-cd19abac-340e-4294-abb9-fbbc86ea2ebc.png',
    level: 4,
  },
]

const UserSkilEdit = () => {
  const router = useRouter()
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [rangeIndex, setRangeIndex] = useState(0)
  const [skilName, setSkilName] = useState('')
  const [skilImageUrl, setSkilImageUrl] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const [error, setError] = useState('')
  const [skilFilterSuggestions, setSkilFilterSuggestions] = useState([])
  const sliderText = () => {
    if (rangeIndex === 1) {
      return '初心者'
    } else if (rangeIndex === 2) {
      return '中級者'
    } else if (rangeIndex === 3) {
      return '上級者'
    } else if (rangeIndex === 4) {
      return '達人'
    }
    return '未設定'
  }
  const handleSliderChange = (event) => {
    setRangeIndex(parseInt(event.target.value, 10))
  }

  const handleSkilFilterChange = (text) => {
    // 入力した値をもとにフィルターをかける。
    // 空の配列を用意
    let matches = []
    // 入力する値が0文字より大きければ処理を行う
    if (text.length > 1) {
      matches = skilList.filter((opt) => {
        // new RegExp = パターンでテキストを検索するために使用
        const regex = new RegExp(`${text}`, 'gi')
        return opt.text.match(regex)
      })
    }
    // フィルターをかけた配列をsuggestionsのステートに入れる
    setSkilFilterSuggestions(matches)
    setSkilName(text)
  }
  const handleModalClose = async () => {
    try {
      await setSkilName('')
      await setSkilImageUrl('')
      await setRangeIndex(0)
      await setSkilFilterSuggestions([])
    } catch (e) {
      setError(e)
    }
    await onClose()
  }
  return (
    <>
      <Flex direction='column' py='56px'>
        <Flex
          alignItems='center'
          mb='20px'
          cursor='pointer'
          onClick={() => router.push(`/users/${id}`)}
        >
          <Icon fontSize='22px' as={AiOutlineLeft} color='blue.800' mr='12px' />
          <Text color='blue.800' fontWeight='bold' fontSize='22px'>
            編集終了
          </Text>
        </Flex>
        <HStack spacing='8px' flexWrap='wrap'>
          {skilList?.map((list) => (
            <SkilCard
              key={list.id}
              text={list.text}
              level={list.level}
              thumbnail={list.thumbnail}
              fill='url(#skil)'
              isNew={false}
              onClick={onOpen}
            />
          ))}
          <SkilCard
            text='新規作成'
            level={4}
            thumbnail=''
            fill='#DBDDDF'
            isNew={true}
            onClick={onOpen}
          />
        </HStack>
      </Flex>
      <ModalCard
        isOpen={isOpen}
        onClose={handleModalClose}
        cancelButtonText='キャンセル'
        submitButtonText='追加する'
        title='スキルを追加'
        size='xl'
      >
        <Flex justifyContent='space-between'>
          <Flex direction='column' w='300px'>
            <Flex
              direction='column'
              color='black'
              fontSize='14px'
              fontWeight='bold'
              mb='24px'
            >
              <Text mb='12px'>スキルを入力してください</Text>
              <Input
                onFocus={() => setIsFocus(true)}
                focusBorderColor='gray.300'
                variant='flushed'
                placeholder='スキル名'
                value={skilName}
                onChange={(e) => handleSkilFilterChange(e.target.value)}
              />
              {isFocus && (
                <Box
                  w='100%'
                  h='100%'
                  boxShadow='md'
                  bg='white'
                  mt='8px'
                  borderRadius='lg'
                >
                  {skilFilterSuggestions?.map((suggestion, i) => (
                    <Flex
                      cursor='pointer'
                      bg='white'
                      _hover={{ bg: 'gray.100' }}
                      key={i}
                      p='8px 8px'
                      alignItems='center'
                      onClick={async () => {
                        // textにフィルターをかけた入力候補の値を入れる
                        await setSkilName(suggestion.text)
                        await setSkilImageUrl(suggestion.thumbnail)
                        await setIsFocus(false)
                      }}
                    >
                      <Image
                        w='24px'
                        h='24px'
                        mr='8px'
                        src={suggestion.thumbnail}
                        alt=''
                      />
                      <Text>{suggestion.text}</Text>
                    </Flex>
                  ))}
                </Box>
              )}
            </Flex>
            <Flex
              direction='column'
              color='black'
              fontSize='14px'
              fontWeight='bold'
              mb='36px'
            >
              <Text mb='12px'>スキルのレベルを入力してください</Text>
              <Text color='gray.400' mb='10px'>
                レベル：{sliderText()}
              </Text>
              <Slider
                aria-label='slider-ex-1'
                defaultValue={0}
                step={1}
                min={0}
                max={4}
                value={rangeIndex}
                onChange={(v) => setRangeIndex(v)}
              >
                <SliderTrack>
                  <SliderFilledTrack bgGradient='linear(to-b, mainGradient.100, mainGradient.200)' />
                </SliderTrack>
                <SliderThumb
                  boxSize={5}
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  position='relative'
                >
                  <Flex
                    position='absolute'
                    bg='white'
                    w='15px'
                    h='15px'
                    borderRadius='full'
                    left='0'
                    right='0'
                    top='0'
                    bottom='0'
                    margin='auto'
                  />
                </SliderThumb>
              </Slider>
            </Flex>
          </Flex>
          <Flex
            direction='column'
            color='black'
            fontWeight='bold'
            alignItems='center'
          >
            <Text mb='12px' fontSize='10px'>
              プレビュー
            </Text>
            <SkilCard
              text={skilName}
              level={rangeIndex}
              thumbnail={skilName ? skilImageUrl : ''}
              fill='url(#skil)'
              isNew={false}
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </ModalCard>
    </>
  )
}

export default UserSkilEdit
