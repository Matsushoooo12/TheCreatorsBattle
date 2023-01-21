import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import BackArrowTitle from '../../../components/atoms/BackArrowTitle'

const PaymentList = () => {
  const router = useRouter()
  return (
    <Flex direction='column' py='56px' px='80px'>
      <Flex
        w='100%'
        h='85vh'
        bg='white'
        p='24px'
        borderRadius='lg'
        boxShadow='lg'
        direction='column'
      ></Flex>
    </Flex>
  )
}

export default PaymentList
