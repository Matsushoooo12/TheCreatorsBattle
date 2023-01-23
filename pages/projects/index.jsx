import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ProjectCard from '../../components/molecules/ProjectCard'
import ProjectList from '../../components/organisms/ProjectList'
import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore'
import { collection, doc, query } from 'firebase/firestore'
import { db } from '../../firebase/config'

const todoProjects = [
  {
    id: 1,
    title: 'ゴルフを楽しくするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907364-83751dcb-7e19-4ba4-893c-de0d36d97268.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 2,
    title: 'ファイターズトレーニングを楽しくするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907365-55363992-a4d2-48fb-bd07-b292ac15599f.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 3,
    title: 'ウエイトリフティングを楽しくするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907367-903e9206-530e-4d5e-8601-6ad8267bbd32.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 4,
    title: 'エクササイズを楽しくするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907369-5f5897ab-a673-4e1e-9cfd-0cefe879eb59.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 5,
    title: 'タスクを管理するアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907354-f4555c40-f60f-42db-b322-e9e27df68b06.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 6,
    title: '旅行を計画するアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
  {
    id: 7,
    title: '貯金をするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907358-433205a8-128e-40a1-b7d9-9ef3c9125824.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'recruitment',
  },
]

const inProgressProjects = [
  {
    id: 1,
    title: '翻訳をするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907359-827435e6-f4cd-424b-a589-1279ad40a49b.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'production',
  },
  {
    id: 2,
    title: 'フォトを編集するアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907360-7bbf5008-0264-4627-8db9-5f23b87f9f3b.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'vote',
  },
  {
    id: 3,
    title: '通話をするアプリ',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907363-fb223792-b1fd-4b2a-94c3-0d2aef02531c.jpg',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'vote',
  },
]

// const doneProjects = [
//   {
//     id: 1,
//     title: 'メッセージをするアプリ',
//     thumbnail:
//       'https://user-images.githubusercontent.com/66903388/213907364-83751dcb-7e19-4ba4-893c-de0d36d97268.jpg',
//     categories: ['UI/UXデザイン', 'ウェブアプリ'],
//     joinNumber: 25,
//     acquisitionPoints: 3000,
//     untilTheDeadline: 3,
//     status: 'done',
//   },
//   {
//     id: 2,
//     title: 'ニュースを読むアプリ',
//     thumbnail:
//       'https://user-images.githubusercontent.com/66903388/213907365-55363992-a4d2-48fb-bd07-b292ac15599f.jpg',
//     categories: ['UI/UXデザイン', 'ウェブアプリ'],
//     joinNumber: 25,
//     acquisitionPoints: 3000,
//     untilTheDeadline: 3,
//     status: 'done',
//   },
//   {
//     id: 3,
//     title: 'ブログを書くアプリ',
//     thumbnail:
//       'https://user-images.githubusercontent.com/66903388/213907367-903e9206-530e-4d5e-8601-6ad8267bbd32.jpg',
//     categories: ['UI/UXデザイン', 'ウェブアプリ'],
//     joinNumber: 25,
//     acquisitionPoints: 3000,
//     untilTheDeadline: 3,
//     status: 'done',
//   },
// ]

const Projects = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projectsSnapshot] = useCollection(collection(db, 'projects'))
  const projects = projectsSnapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  const recruitmentProjects = projects?.filter(
    (project) => project.status === 'recruitment',
  )
  const productionProjects = projects?.filter(
    (project) => project.status === 'production' || project.status === 'vote',
  )
  const voteProjects = projects?.filter((project) => project.status === 'vote')
  const doneProjects = projects?.filter((project) => project.status === 'done')
  // 流体シェイプ
  // document.querySelector('.fluid')?.animate(
  //   {
  //     borderRadius: [
  //       '50% 50% 50% 70%/50% 50% 70% 60%',
  //       '80% 30% 50% 50%/50%',
  //       '40% 40% 50% 40%/30% 50% 40% 80%',
  //     ],
  //   },
  //   {
  //     iterations: Infinity,
  //     direction: 'alternate',
  //     duration: 4000,
  //   },
  // )
  // document.querySelector('.fluid4')?.animate(
  //   {
  //     borderRadius: [
  //       '50% 50% 50% 70%/50% 50% 70% 60%',
  //       '80% 30% 50% 50%/50%',
  //       '40% 40% 50% 40%/30% 50% 40% 80%',
  //     ],
  //   },
  //   {
  //     iterations: Infinity,
  //     direction: 'alternate',
  //     duration: 4000,
  //   },
  // )
  return (
    <Flex direction='column' py='56px' position='relative'>
      <ProjectList
        title='募集中のプロジェクト'
        isEdit={false}
        isRowScroll={true}
      >
        {recruitmentProjects?.map((list) => (
          <ProjectCard
            key={list.id}
            title={list.title}
            categories={list.categories}
            joinNumber={list.joinNumber}
            acquisitionPoints={list.acquisitionPoints}
            untilTheDeadline={4}
            thumbnail={list.thumbnail}
            status={list.status}
            onClick={() => router.push(`/projects/${list.id}`)}
          />
        ))}
      </ProjectList>
      <ProjectList
        title='進行中のプロジェクト'
        isEdit={false}
        isRowScroll={true}
      >
        {productionProjects?.map((list) => (
          <ProjectCard
            key={list.id}
            title={list.title}
            categories={list.categories}
            joinNumber={list.joinNumber}
            acquisitionPoints={
              list.acquisitionPoints ? list.acquisitionPoints : 3000
            }
            untilTheDeadline={4}
            thumbnail={list.thumbnail}
            status={list.status}
            onClick={() => router.push(`/projects/${list.id}`)}
          />
        ))}
      </ProjectList>
      <ProjectList
        title='終了したプロジェクト'
        isEdit={false}
        isRowScroll={true}
      >
        {doneProjects?.map((list) => (
          <ProjectCard
            key={list.id}
            title={list.title}
            categories={list.categories}
            joinNumber={list.joinNumber}
            thumbnail={list.thumbnail}
            acquisitionPoints={3000}
            untilTheDeadline={4}
            status={list.status}
            onClick={() => router.push(`/projects/${list.id}`)}
          />
        ))}
      </ProjectList>
    </Flex>
  )
}

export default Projects
