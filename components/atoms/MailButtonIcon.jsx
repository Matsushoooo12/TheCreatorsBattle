import { Flex } from '@chakra-ui/react'
import React from 'react'
import EMailButtonIcon from '@mui/icons-material/Email'

const MailButtonIcon = () => {
  return (
    <Flex position="relative" cursor="pointer">
      <EMailButtonIcon
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          left: '0',
          bottom: '0',
          margin: 'auto',
          fontSize: '20px',
          color: 'white',
        }}
      />
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16.584"
          cy="16.5833"
          r="16.25"
          fill="url(#paint0_linear_1270_2020)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1270_2020"
            x1="16.584"
            y1="0.333252"
            x2="16.584"
            y2="32.8333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7CAAFF" />
            <stop offset="1" stop-color="#8D85F4" />
          </linearGradient>
        </defs>
      </svg>
    </Flex>
  )
}

export default MailButtonIcon
