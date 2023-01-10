import { Flex, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import SkilCard from '../../../components/molecules/SkilCard'
import UserWorksCard from '../../../components/molecules/UserWorksCard'
import ProjectList from '../../../components/organisms/ProjectList'

const userWorksList = [
    {
      id: 1,
      thumbnail: "",
      title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
      categories: [
        "UI/UXデザイン",
        "ウェブアプリ"
      ],
      createdAt: '2022/01/01'
    },
    {
      id: 2,
      thumbnail: "",
      title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
      categories: [
        "UI/UXデザイン",
        "ウェブアプリ"
      ],
      createdAt: '2022/01/01'
    },
    {
      id: 3,
      thumbnail: "",
      title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
      categories: [
        "UI/UXデザイン",
        "ウェブアプリ"
      ],
      createdAt: '2022/01/01'
    },
    {
      id: 4,
      thumbnail: "",
      title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
      categories: [
        "UI/UXデザイン",
        "ウェブアプリ"
      ],
      createdAt: '2022/01/01'
    },
    {
      id: 5,
      thumbnail: "",
      title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
      categories: [
        "UI/UXデザイン",
        "ウェブアプリ"
      ],
      createdAt: '2022/01/01'
    }
  ]
  
  const skilList = [
    {
      id: 1,
      text: 'Next.js',
      thumbnail: "",
      level: 1
    },
    {
      id: 2,
      text: 'Next.js',
      thumbnail: "",
      level: 2
    },
    {
      id: 3,
      text: 'Next.js',
      thumbnail: "",
      level: 3
    },
    {
      id: 4,
      text: 'Next.js',
      thumbnail: "",
      level: 4
    },
    {
      id: 5,
      text: 'Next.js',
      thumbnail: "",
      level: 4
    },
  ]

const DetailUser = () => {
    const router = useRouter()
  return (
    <Flex direction="column" py="56px">
      <ProjectList title="これまでの作品" >
        {userWorksList?.map((list) => (
          <UserWorksCard key={list.id} thumbnail={list.thumbnail} title={list.title} categories={list.categories} createdAt={list.createdAt} onClick={() => router.push(`/works/${list.id}`)} />
        ))}
      </ProjectList>
      <Flex w="100%" direction="column" mb="32px">
        <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="20px">スキルレベル</Text>
        <HStack spacing="8px" flexWrap="wrap">
          {skilList?.map((list) => (
            <SkilCard key={list.id} text={list.text} level={list.level} thumbnail={list.thumbnail} />
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}

export default DetailUser