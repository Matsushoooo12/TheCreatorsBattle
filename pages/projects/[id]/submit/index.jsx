/* eslint-disable react/no-children-prop */
import {
  AspectRatio,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import ModalCard from '../../../../components/molecules/ModalCard'
import { AuthContext } from '../../../_app'
import { AiFillCamera } from 'react-icons/ai'
import BackArrowTitle from '../../../../components/atoms/BackArrowTitle'
import PrimaryButton from '../../../../components/atoms/PrimaryButton'

const projectItem = {
  id: 1,
  status: 'production',
  title: 'カメラを撮るアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'title',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'textarea',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'textarea',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'textarea',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'link',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'link',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text[]',
      text: '使用技術',
    },
  ],
  isSubmit: true,
}

const ProjectSubmitForm = () => {
  const router = useRouter()
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setIsModalVisible } = useContext(AuthContext)
  const handleSubmitWorks = () => {
    setIsModalVisible(true)
    router.push(`/projects/${id}`)
  }
  return (
    <Flex direction='column' py='56px' px='80px'>
      <Flex justifyContent='space-between' alignItems='center' mb='16px'>
        <BackArrowTitle
          text='プロジェクト詳細'
          onClick={() => router.push(`/projects/${id}`)}
        />
        <Flex alignItems='center'>
          <Text
            p='12px'
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            bgClip='text'
            borderRadius='md'
            cursor='pointer'
            fontSize='14px'
          >
            下書きを保存する
          </Text>
        </Flex>
      </Flex>
      <Flex
        w='100%'
        h='80vh'
        bg='white'
        p='24px'
        borderRadius='lg'
        direction='column'
        overflowX='scroll'
      >
        <Flex alignItems='center' mb='8px'>
          <Input
            fontWeight='bold'
            fontSize='12px'
            focusBorderColor='gray.400'
            borderColor='gray.400'
            placeholder='作品のカテゴリ：ウェブアプアプリ、ウェブデザイン、など！'
            _placeholder={{ color: 'gray.400' }}
          />
        </Flex>
        <Input
          size='lg'
          placeholder='タイトル'
          color='blue.800'
          fontWeight='bold'
          fontSize='22px'
          _placeholder={{ color: 'gray.400' }}
          focusBorderColor='gray.400'
          borderColor='gray.400'
          mb='16px'
          p='16px'
        />
        <Flex
          w='100%'
          h='385px'
          borderRadius='lg'
          bg='blackAlpha.100'
          border='1px solid #CBD5E0'
          borderColor='gray.400'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'
          mb='32px'
          direction='column'
          py='145px'
        >
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            h='100%'
          >
            <Icon
              as={AiFillCamera}
              fontSize='40px'
              color='gray.400'
              mb='10px'
            />
            <Text
              p='2px 8px'
              bg='gray.400'
              color='white'
              fontSize='12px'
              mb='8px'
            >
              + 画像を選択
            </Text>
            <Text fontSize='8px' color='gray.400'>
              またはドラッグ&ドロップで追加
            </Text>
          </Flex>
        </Flex>
        <Flex direction='column' mb='32px'>
          <Text fontSize='12px' fontWeight='bold' mb='8px' color='gray.400'>
            作品URL
          </Text>
          <Input
            fontSize='14px'
            borderColor='gray.400'
            focusBorderColor='gray.400'
            placeholder='URL'
            _placeholder={{ color: 'gray.400' }}
            variant='flushed'
          />
        </Flex>
        <Flex mb='32px'>
          <Textarea
            fontSize='14px'
            borderColor='gray.400'
            focusBorderColor='gray.400'
            placeholder='本文：作品の概要やビジュアル、制作ストーリーなどなんでも残してみましょう！'
            _placeholder={{ color: 'gray.400' }}
            h='500px'
          />
        </Flex>
        <Flex>
          <Input
            fontSize='14px'
            focusBorderColor='gray.400'
            borderColor='gray.400'
            placeholder='使用技術タグを追加する'
            _placeholder={{ color: 'gray.400' }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProjectSubmitForm
