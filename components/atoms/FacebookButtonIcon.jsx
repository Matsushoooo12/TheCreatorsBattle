import { Flex } from '@chakra-ui/react'
import React from 'react'

const FacebookButtonIcon = () => {
  return (
    <Flex cursor='pointer' w='33px' h='33px' borderRadius='full' bg='white'>
      <svg
        width='33'
        height='33'
        viewBox='0 0 33 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.584 0.333252C7.60992 0.333252 0.333984 7.49725 0.333984 16.3333C0.333984 24.3546 6.33565 30.9786 14.1546 32.1359V20.5733H10.1341V16.3679H14.1546V13.5693C14.1546 8.93592 16.4472 6.90259 20.358 6.90259C22.2309 6.90259 23.2221 7.03992 23.6906 7.10125V10.7719H21.0229C19.3627 10.7719 18.7832 12.3226 18.7832 14.0693V16.3679H23.6487L22.9892 20.5733H18.7832V32.1693C26.7145 31.1106 32.834 24.4333 32.834 16.3333C32.834 7.49725 25.558 0.333252 16.584 0.333252Z'
          fill='url(#paint0_linear_1270_2022)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1270_2022'
            x1='16.584'
            y1='0.333252'
            x2='16.584'
            y2='32.1693'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7CAAFF' />
            <stop offset='1' stopColor='#8D85F4' />
          </linearGradient>
        </defs>
      </svg>
    </Flex>
  )
}

export default FacebookButtonIcon
