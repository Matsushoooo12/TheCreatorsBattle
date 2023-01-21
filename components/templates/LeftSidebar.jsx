import React, { useEffect } from 'react'
import {
  Avatar,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { useRouter } from 'next/router'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import SideMenuIcon from '../molecules/SideMenuIcon'
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import LogoutIcon from '@mui/icons-material/Logout'
import GradientIcon from '../atoms/GradientIcon'
import DeleteIcon from '@mui/icons-material/Delete'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ModalCard from '../molecules/ModalCard'

const LeftSidebar = () => {
  const router = useRouter()
  const { id } = router.query
  const sx = { fill: 'url(#linearColors)', fontSize: 28 }
  const { onOpen, onClose, isOpen } = useDisclosure()
  return (
    <>
      <Flex
        bg='white'
        h='100vh'
        minW='96px'
        alignItems='center'
        direction='column'
        boxShadow='lg'
        pt='160px'
        pb='40px'
        justifyContent='space-between'
        position='relative'
      >
        <Flex direction='column' position='absolute' top='10' left='0' w='100%'>
          <SideMenuIcon onClick={() => router.push('/')}>
            <Image
              src='https://user-images.githubusercontent.com/66903388/213845543-f8732feb-fe6f-47da-b2b5-e564dc67ef55.png'
              w='28px'
              alt=''
            />
          </SideMenuIcon>
        </Flex>
        <Flex direction='column' w='100%'>
          <SideMenuIcon
            onClick={() => router.push('/')}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/`}
          >
            <SignalCellularAltIcon sx={sx} />
          </SideMenuIcon>
          <SideMenuIcon
            onClick={() => router.push('/projects')}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/projects`}
          >
            <EmojiEventsIcon sx={sx} />
          </SideMenuIcon>
          <SideMenuIcon
            onClick={() => router.push('/questions')}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/questions`}
          >
            <EmojiObjectsRoundedIcon sx={sx} />
          </SideMenuIcon>
          <SideMenuIcon
            onClick={() => router.push('/notification')}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/notification`}
          >
            <NotificationsRoundedIcon sx={sx} />
          </SideMenuIcon>
        </Flex>
        <Flex direction='column' w='100%'>
          <Popover placement='right'>
            <PopoverTrigger>
              <Flex position='relative'>
                <SideMenuIcon
                  url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/settings`}
                >
                  <SettingsRoundedIcon sx={sx} />
                </SideMenuIcon>
              </Flex>
            </PopoverTrigger>
            <PopoverContent color='black'>
              <PopoverCloseButton color='gray.400' mt='6px' mr='6px' />
              <PopoverBody
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                bgClip='text'
              >
                <Flex direction='column' p='10px 24px'>
                  <HStack spacing='6px' alignItems='center' cursor='pointer'>
                    <GradientIcon>
                      <LogoutIcon
                        sx={{ fontSize: '20px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <Text fontWeight='bold'>ログアウト</Text>
                  </HStack>
                  <Flex w='100%' h='1px' bg='gray.100' my='8px' />
                  <HStack
                    spacing='6px'
                    alignItems='center'
                    cursor='pointer'
                    onClick={onOpen}
                  >
                    <GradientIcon>
                      <DeleteIcon
                        sx={{ fontSize: '20px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <Text fontWeight='bold'>アカウント削除</Text>
                  </HStack>
                  <Flex w='100%' h='1px' bg='gray.300' my='8px' />
                  <HStack
                    spacing='6px'
                    alignItems='center'
                    cursor='pointer'
                    onClick={() => router.push('/settings/payment')}
                  >
                    <GradientIcon>
                      <CreditCardIcon
                        sx={{ fontSize: '20px', fill: 'url(#linearColors)' }}
                      />
                    </GradientIcon>
                    <Text fontWeight='bold'>お支払い情報</Text>
                  </HStack>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <SideMenuIcon
            onClick={() => router.push('/users/1')}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/users/1`}
          >
            <Avatar w='28px' h='28px' />
          </SideMenuIcon>
        </Flex>
      </Flex>
      <ModalCard
        title='アカウント削除しますか？'
        cancelButtonText='削除する'
        submitButtonText='辞める'
        isOpen={isOpen}
        onClose={onClose}
      >
        <Flex direction='column' color='black' fontWeight='bold' mb='12px'>
          <Text mb='16px'>
            アカウントを削除すると、あなたのデータは完全に削除され復興されません。
          </Text>
          <Text>本当にアカウントを削除してもよろしいですか？</Text>
        </Flex>
      </ModalCard>
    </>
  )
}

export default LeftSidebar
