import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ProjectCard from '../../components/molecules/ProjectCard'
import ProjectList from '../../components/organisms/ProjectList'

const todoProjects = [
  {
    id: 1,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment'
  },
  {
    id: 2,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment'
  },
  {
    id: 3,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment'
  },
  {
    id: 4,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 5,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 6,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 7,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  }
]

const inProgressProjects = [
  {
    id: 1,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'production',
  },
  {
    id: 2,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'vote',
  },
  {
    id: 3,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'vote',
  }
]

const doneProjects = [
  {
    id: 1,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
  {
    id: 2,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
  {
    id: 3,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  }
]

const Projects = () => {
  const router = useRouter()
  return (
    <Flex direction="column" py="56px">
      <ProjectList title="募集中のプロジェクト" >
        {todoProjects?.map((list) => (
            <ProjectCard key={list.id} title={list.title} categories={list.categories} joinNumber={list.joinNumber} acquisitionPoints={list.acquisitionPoints} untilTheDeadline={list.untilTheDeadline} status={list.status} onClick={() => router.push(`/projects/${list.id}`)} />
        ))}
      </ProjectList>
      <ProjectList title="進行中のプロジェクト" >
        {inProgressProjects?.map((list) => (
            <ProjectCard key={list.id} title={list.title} categories={list.categories} joinNumber={list.joinNumber} acquisitionPoints={list.acquisitionPoints} untilTheDeadline={list.untilTheDeadline} status={list.status} onClick={() => router.push(`/projects/${list.id}`)} />
        ))}
      </ProjectList>
      <ProjectList title="終了したプロジェクト" >
        {doneProjects?.map((list) => (
            <ProjectCard key={list.id} title={list.title} categories={list.categories} joinNumber={list.joinNumber} acquisitionPoints={list.acquisitionPoints} untilTheDeadline={list.untilTheDeadline} status={list.status} onClick={() => router.push(`/projects/${list.id}`)} />
        ))}
      </ProjectList>
    </Flex>
  )
}

export default Projects