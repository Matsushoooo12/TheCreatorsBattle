import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AuthContext } from '../../../_app'

const ProjectJoinForm = () => {
  const router = useRouter()
  const { id } = router.query
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setIsModalVisible } = useContext(AuthContext)
  const handleJoinProjects = () => {
    setIsModalVisible(true)
    router.push(`/projects/${id}`)
  }
  return (
    <Flex direction='column' py='56px'>
      <Text color='blue.800' fontWeight='bold' fontSize='22px' mb='16px'>
        参加申請フォーム
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
        onClick={handleJoinProjects}
      >
        提出
      </Flex>
    </Flex>
  )
}

export default ProjectJoinForm
