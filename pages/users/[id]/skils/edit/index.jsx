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
    thumbnail: '',
    level: 1,
  },
  {
    id: 2,
    text: 'Next.js',
    thumbnail: '',
    level: 2,
  },
  {
    id: 3,
    text: 'Next.js',
    thumbnail: '',
    level: 3,
  },
  {
    id: 4,
    text: 'Next.js',
    thumbnail: '',
    level: 4,
  },
  {
    id: 5,
    text: 'Next.js',
    thumbnail: '',
    level: 4,
  },
]

const UserSkilEdit = () => {
  const router = useRouter()
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sliderValue, setSliderValue] = useState(25)
  const [showTooltip, setShowTooltip] = useState(false)
  const sliderText = () => {
    if (sliderValue >= 0 && sliderValue < 25) {
      return '初級者'
    } else if (sliderValue >= 25 && sliderValue < 50) {
      return '中級者'
    } else if (sliderValue >= 50 && sliderValue < 75) {
      return '上級者'
    } else if (sliderValue >= 75) {
      return '達人'
    }
  }
  const sliderStepNumber = (value) => {
    if (value >= 0 && value < 25) {
      setSliderValue(25)
    } else if (value >= 25 && value < 50) {
      setSliderValue(50)
    } else if (value >= 50 && value < 75) {
      setSliderValue(75)
    } else if (value >= 75) {
      setSliderValue(100)
    }
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
        leftButtonText="キャンセル"
        rightButtonText="追加する"
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
          <Slider
            id="slider"
            defaultValue={5}
            min={0}
            max={100}
            colorScheme="teal"
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={sliderText()}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Flex>
      </ModalCard>
    </>
  )
}

export default UserSkilEdit
