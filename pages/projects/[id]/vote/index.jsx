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

const ProjectVoteForm = () => {
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

export default ProjectVoteForm
