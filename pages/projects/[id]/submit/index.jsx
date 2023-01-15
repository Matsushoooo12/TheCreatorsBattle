/* eslint-disable react/no-children-prop */
import {
  AspectRatio,
  Flex,
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

const projectItem = {
  id: 1,
  status: 'production',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
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
    <>
      <Flex direction='column' py='56px' px='80px'>
        <Flex w='100%' bg='white' p='24px' borderRadius='lg' direction='column'>
          <Text color='blue.800' fontWeight='bold' fontSize='22px' mb='16px'>
            作品提出フォーム
          </Text>
          {projectItem.formats?.map((f) => (
            <InputGroup key={f.id} color='black' bg='white' colorScheme='gray'>
              <Flex direction='column' w='100%'>
                <Text fontSize='18px' fontWeight='bold' mb='8px'>
                  {f.text}
                </Text>
                {(f.format === 'text' || f.format === 'title') && (
                  <Input
                    type='text'
                    placeholder={f.text}
                    focusBorderColor='gray.200'
                    borderRadius='md'
                    boxShadow='md'
                    fontSize={f.format === 'title' ? '20px' : '16px'}
                    _placeholder={{ color: 'gray.400' }}
                    size={f.format === 'title' ? 'lg' : 'md'}
                    mb='16px'
                  />
                )}
                {f.format === 'images' && (
                  <Image w='200px' h='120px' bg='gray.200' alt='' mb='16px' />
                )}
                {f.format === 'textarea' && (
                  <Textarea
                    placeholder={f.text}
                    focusBorderColor='gray.200'
                    _placeholder={{ color: 'gray.400' }}
                    height='200px'
                    resize='none'
                    mb='16px'
                    borderRadius='md'
                    boxShadow='md'
                  />
                )}
                {f.format === 'video' && (
                  <Flex w='200px' h='120px' bg='gray.200' mb='16px' />
                )}
                {f.format === 'link' && (
                  <InputGroup size='md' mb='16px'>
                    <InputLeftAddon children='https://' />
                    <Input
                      placeholder={f.text}
                      focusBorderColor='gray.200'
                      _placeholder={{ color: 'gray.400' }}
                    />
                    <InputRightAddon children='.com' />
                  </InputGroup>
                )}
                {f.format === 'text[]' && (
                  <Input
                    type='text'
                    placeholder={f.text}
                    focusBorderColor='gray.200'
                    borderRadius='md'
                    boxShadow='md'
                    _placeholder={{ color: 'gray.400' }}
                    size='md'
                    mb='16px'
                  />
                )}
              </Flex>
            </InputGroup>
          ))}
          <Flex
            p='12px 24px'
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            fontWeight='bold'
            color='white'
            borderRadius='lg'
            boxShadow='md'
            w='100px'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            // onClick={() => router.push(`/projects/${id}`)}
            // onClick={onOpen}
            onClick={handleSubmitWorks}
          >
            提出
          </Flex>
        </Flex>
      </Flex>
      <ModalCard
        cancelButtonText='閉じる'
        isOpen={isOpen}
        onClose={onClose}
        title='提出が完了しました'
        titleEmoji='🎉'
      >
        <Text mb='24px' color='black' fontWeight='bold'>
          お疲れさまです！『{'{タイトル}'}』の作品を提出しました！{' '}
          {'{YYYY / MM / DD}'} から始まる作品投票でまたお会いしましょう☺️
        </Text>
      </ModalCard>
    </>
  )
}

export default ProjectSubmitForm
