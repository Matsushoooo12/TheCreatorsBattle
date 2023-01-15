import {
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../pages/_app'

const ModalCard = (props) => {
  const {
    children,
    cancelButtonText,
    submitButtonText,
    isOpen,
    onClose,
    title,
    titleEmoji,
  } = props
  const { setIsModalVisible, isModalVisible } = useContext(AuthContext)
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
      size='lg'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p='32px'>
          <Flex mb='24px' alignItems='center' fontSize='20px' fontWeight='bold'>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              mr='8px'
            >
              {title}
            </Text>
            <Text>{titleEmoji}</Text>
          </Flex>
          {children}
          <Flex alignItems='center' justifyContent='flex-end'>
            <HStack spacing='12px' alignItems='center' fontWeight='bold'>
              <Flex
                p='12px 24px'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                bgClip='text'
                borderRadius='md'
                cursor='pointer'
                onClick={onClose}
              >
                {cancelButtonText}
              </Flex>
              {submitButtonText && (
                <Flex
                  p='12px 24px'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  borderRadius='md'
                  cursor='pointer'
                  color='white'
                >
                  {submitButtonText}
                </Flex>
              )}
            </HStack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalCard
