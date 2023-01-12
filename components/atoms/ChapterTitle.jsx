import { Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../pages/_app'
import EditButton from './EditButton'

const ChapterTitle = (props) => {
  const { title, onClick, isEdit } = props
  const { isLogin } = useContext(AuthContext)
  return (
    <Flex alignItems='center' mb='20px'>
      <Text color='blue.800' fontWeight='bold' fontSize='22px' mr='12px'>
        {title}
      </Text>
      {isEdit && isLogin && <EditButton onClick={onClick} />}
    </Flex>
  )
}

export default ChapterTitle
