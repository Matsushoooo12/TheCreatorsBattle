import {
  Flex,
  HStack,
  Icon,
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
    level: 1,
  },
  {
    id: 2,
    text: 'TypeScript',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    level: 2,
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
]

const UserSkilEdit = () => {
  const router = useRouter()
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [rangeIndex, setRangeIndex] = useState(0)
  const sliderText = () => {
    if (rangeIndex === 1) {
      return '初級者'
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
  return (
    <>
      <Flex direction="column" py="56px">
        <Flex
          alignItems="center"
          mb="20px"
          cursor="pointer"
          onClick={() => router.push(`/users/${id}`)}
        >
          <Icon fontSize="22px" as={AiOutlineLeft} color="blue.800" mr="12px" />
          <Text color="blue.800" fontWeight="bold" fontSize="22px">
            編集終了
          </Text>
        </Flex>
        <HStack spacing="8px" flexWrap="wrap">
          {skilList?.map((list) => (
            <SkilCard
              key={list.id}
              text={list.text}
              level={list.level}
              thumbnail={list.thumbnail}
              fill="url(#skil)"
              isNew={false}
              onClick={onOpen}
            />
          ))}
          <SkilCard
            text="新規作成"
            level={4}
            thumbnail=""
            fill="#DBDDDF"
            isNew={true}
            onClick={onOpen}
          />
        </HStack>
      </Flex>
      <ModalCard
        isOpen={isOpen}
        onClose={onClose}
        cancelButtonText="キャンセル"
        submitButtonText="追加する"
        title="スキルを追加"
      >
        <Flex
          direction="column"
          color="black"
          fontSize="14px"
          fontWeight="bold"
          mb="24px"
        >
          <Text mb="12px">スキルを入力してください</Text>
          <Input
            focusBorderColor="gray.300"
            variant="flushed"
            placeholder="スキル名"
          />
        </Flex>
        <Flex
          direction="column"
          color="black"
          fontSize="14px"
          fontWeight="bold"
          mb="36px"
        >
          <Text mb="12px">スキルを入力してください</Text>
          <Text color="gray.400" mb="10px">
            レベル：{sliderText()}
          </Text>
          <input
            type="range"
            min="0"
            max="4"
            value={rangeIndex}
            onChange={handleSliderChange}
          />
        </Flex>
        <Flex mb="36px">
          <SkilCard
            text="Next.js"
            level={rangeIndex}
            thumbnail="https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png"
            fill="url(#skil)"
            isNew={false}
            onClick={onOpen}
          />
        </Flex>
      </ModalCard>
    </>
  )
}

export default UserSkilEdit
