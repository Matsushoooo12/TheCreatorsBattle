import {
  Avatar,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AiFillGithub, AiFillStar, AiFillTwitterCircle } from 'react-icons/ai'
import { useGetUrl } from '../../hooks/useGetUrl'
import ProjectCard from '../molecules/ProjectCard'
import RankingList from '../organisms/RankingList'
import { MdFacebook } from 'react-icons/md'
import { useGetStatus } from '../../hooks/useGetStatus'
import UserWorksCard from '../molecules/UserWorksCard'
import EditButton from '../atoms/EditButton'
import { AuthContext } from '../../pages/_app'
import ModalCard from '../molecules/ModalCard'
import GithubButtonIcon from '../atoms/GithubButtonIcon'
import FacebookButtonIcon from '../atoms/FacebookButtonIcon'
import TwitterButtonIcon from '../atoms/TwitterButtonIcon'
import NewCreateCard from '../molecules/NewCreateCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import GradientIcon from '../atoms/GradientIcon'
import AddIcon from '@mui/icons-material/Add'
import ReviewChart from '../organisms/ReviewChart'
import PrimaryButton from '../atoms/PrimaryButton'

const inProgressProjects = [
  {
    id: 1,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'production',
  },
]

const doneProjects = [
  {
    id: 1,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
  {
    id: 2,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
  {
    id: 3,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
]

const inProgressProjects2 = []
const doneProjects2 = []

const rankingList = [
  {
    id: 1,
    rank: 1,
    user: {
      id: 1,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 2,
    rank: 2,
    user: {
      id: 2,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 3,
    rank: 3,
    user: {
      id: 3,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 4,
    rank: 4,
    user: {
      id: 4,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 5,
    rank: 5,
    user: {
      id: 5,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 6,
    rank: 6,
    user: {
      id: 6,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 7,
    rank: 7,
    user: {
      id: 7,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 8,
    rank: 8,
    user: {
      id: 8,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 9,
    rank: 9,
    user: {
      id: 9,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 10,
    rank: 10,
    user: {
      id: 10,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
]

const myWorks1 = {
  id: 1,
  thumbnail: '',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  createdAt: '2022/01/01',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  user: {
    id: 1,
    displayName: 'まつもとしょうご',
  },
}

const projectItem1 = {
  id: 1,
  status: 'recruitment',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
}

const projectItem2 = {
  id: 2,
  status: 'production',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
  isSubmit: true,
}

const projectItem3 = {
  id: 3,
  status: 'vote',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
  isVoted: false,
}

const projectItem4 = {
  id: 4,
  status: 'done',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
}

const projectItem5 = {
  id: 4,
  status: 'done',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
}

const worksItem1 = {
  id: 1,
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  skils: [
    {
      id: 1,
      text: 'Next.js',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    },
    {
      id: 2,
      text: 'TypeScript',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    },
    {
      id: 3,
      text: 'Firebase',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    },
  ],
  project: {
    id: 4,
    status: 'done',
    rank: 4,
    point: 15,
    views: 3000,
    data: [
      {
        subject: `ビジネス`,
        A: 3.2,
        fullMark: 5,
      },
      {
        subject: '技術',
        A: 2.3,
        fullMark: 5,
      },
      {
        subject: 'デザイン',
        A: 4.5,
        fullMark: 5,
      },
      {
        subject: '発想',
        A: 2.8,
        fullMark: 5,
      },
    ],
    reviews: [
      {
        comment: 'テストテストテストテストテスト',
      },
      {
        comment: 'テスト2テスト2テスト2テスト2テスト2',
      },
      {
        comment: 'テスト3テスト3テスト3テスト3テスト3',
      },
      {
        comment: 'テスト4テスト4テスト4テスト4テスト4',
      },
    ],
  },
  user: {
    id: 1,
    displayName: 'まつもとしょうご',
    photoURL: '',
  },
}

const worksItem2 = {
  id: 2,
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  skils: [
    {
      id: 1,
      text: 'Next.js',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    },
    {
      id: 2,
      text: 'TypeScript',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    },
    {
      id: 3,
      text: 'Firebase',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    },
  ],
  project: {
    id: 4,
    status: 'done',
    rank: 4,
    point: 15,
    views: 3000,
    data: [
      {
        subject: `ビジネス`,
        A: 3.2,
        fullMark: 5,
      },
      {
        subject: '技術',
        A: 2.3,
        fullMark: 5,
      },
      {
        subject: 'デザイン',
        A: 4.5,
        fullMark: 5,
      },
      {
        subject: '発想',
        A: 2.8,
        fullMark: 5,
      },
    ],
    reviews: [
      {
        comment: 'テストテストテストテストテスト',
      },
      {
        comment: 'テスト2テスト2テスト2テスト2テスト2',
      },
      {
        comment: 'テスト3テスト3テスト3テスト3テスト3',
      },
      {
        comment: 'テスト4テスト4テスト4テスト4テスト4',
      },
    ],
  },
  user: {
    id: 2,
    displayName: 'まつもとしょうご',
    photoURL: '',
  },
}

const worksItem3 = {
  id: 3,
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  skils: [
    {
      id: 1,
      text: 'Next.js',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    },
    {
      id: 2,
      text: 'TypeScript',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    },
    {
      id: 3,
      text: 'Firebase',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    },
  ],
  project: {
    id: 4,
    status: 'done',
    rank: 4,
    point: 15,
    views: 3000,
    data: [
      {
        subject: `ビジネス`,
        A: 3.2,
        fullMark: 5,
      },
      {
        subject: '技術',
        A: 2.3,
        fullMark: 5,
      },
      {
        subject: 'デザイン',
        A: 4.5,
        fullMark: 5,
      },
      {
        subject: '発想',
        A: 2.8,
        fullMark: 5,
      },
    ],
    reviews: [
      {
        comment: 'テストテストテストテストテスト',
      },
      {
        comment: 'テスト2テスト2テスト2テスト2テスト2',
      },
      {
        comment: 'テスト3テスト3テスト3テスト3テスト3',
      },
      {
        comment: 'テスト4テスト4テスト4テスト4テスト4',
      },
    ],
  },
  user: {
    id: 3,
    displayName: 'まつもとしょうご',
    photoURL: '',
  },
}

const worksItem4 = {
  id: 4,
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  skils: [
    {
      id: 1,
      text: 'Next.js',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    },
    {
      id: 2,
      text: 'TypeScript',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    },
    {
      id: 3,
      text: 'Firebase',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    },
  ],
  project: {
    id: 4,
    status: 'done',
    rank: 4,
    point: 15,
    views: 3000,
    data: [
      {
        subject: `ビジネス`,
        A: 3.2,
        fullMark: 5,
      },
      {
        subject: '技術',
        A: 2.3,
        fullMark: 5,
      },
      {
        subject: 'デザイン',
        A: 4.5,
        fullMark: 5,
      },
      {
        subject: '発想',
        A: 2.8,
        fullMark: 5,
      },
    ],
    reviews: [
      {
        comment: 'テストテストテストテストテスト',
      },
      {
        comment: 'テスト2テスト2テスト2テスト2テスト2',
      },
      {
        comment: 'テスト3テスト3テスト3テスト3テスト3',
      },
      {
        comment: 'テスト4テスト4テスト4テスト4テスト4',
      },
    ],
  },
  user: {
    id: 4,
    displayName: 'まつもとしょうご',
    photoURL: '',
  },
}

const worksItem5 = {
  id: 5,
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  skils: [
    {
      id: 1,
      text: 'Next.js',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    },
    {
      id: 2,
      text: 'TypeScript',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    },
    {
      id: 3,
      text: 'Firebase',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    },
  ],
  project: {
    id: 4,
    status: 'done',
    rank: 4,
    point: 15,
    views: 3000,
    data: [
      {
        subject: `ビジネス`,
        A: 3.2,
        fullMark: 5,
      },
      {
        subject: '技術',
        A: 2.3,
        fullMark: 5,
      },
      {
        subject: 'デザイン',
        A: 4.5,
        fullMark: 5,
      },
      {
        subject: '発想',
        A: 2.8,
        fullMark: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        comment: 'テストテストテストテストテスト',
      },
      {
        id: 2,
        comment: 'テスト2テスト2テスト2テスト2テスト2',
      },
      {
        id: 3,
        comment: 'テスト3テスト3テスト3テスト3テスト3',
      },
      {
        id: 4,
        comment: 'テスト4テスト4テスト4テスト4テスト4',
      },
    ],
  },
  user: {
    id: 5,
    displayName: 'まつもとしょうご',
    photoURL: '',
  },
}

const data = [
  {
    subject: `ビジネス`,
    A: 3.2,
    fullMark: 5,
  },
  {
    subject: '技術',
    A: 2.3,
    fullMark: 5,
  },
  {
    subject: 'デザイン',
    A: 4.5,
    fullMark: 5,
  },
  {
    subject: '発想',
    A: 2.8,
    fullMark: 5,
  },
]

const otherUser = {
  id: 2,
}

const currentUser = {
  id: 1,
}

const RightSidebar = () => {
  const router = useRouter()
  const { id, worksId } = router.query
  const { URL } = useGetUrl()
  const [isIntroduction, setIsIntroduction] = useState(false)
  const [isOpenHigherRankModal, setIsOpenHigherRankModal] = useState(false)
  const { isLogin, isModalVisible, setIsModalVisible } = useContext(AuthContext)
  const { projectButtonText, gradientColor } = useGetStatus(
    projectItem4.status,
    projectItem4.isVoted,
    projectItem4.isSubmit,
  )
  const projectStatusLink = () => {
    if (projectItem4.status === 'recruitment') {
      return `http://localhost:3000/projects/${id}/join`
    } else if (projectItem4.status === 'production') {
      return `http://localhost:3000/projects/${id}/submit`
    } else if (projectItem4.status === 'vote') {
      return `http://localhost:3000/projects/${id}/vote`
    } else {
      return `http://localhost:3000/projects/${id}`
    }
  }
  const modalProjectClose = () => {
    setIsModalVisible(false)
  }
  const modalIntroductionClose = () => {
    setIsIntroduction(false)
  }
  const modalIntroductionOpen = () => {
    setIsIntroduction(true)
  }
  const modalHigherRankClose = () => {
    setIsOpenHigherRankModal(false)
  }
  const modalHigherRankOpen = () => {
    setIsOpenHigherRankModal(true)
  }
  const handleSubmit = () => {
    setIsModalVisible(true)
    router.push(`/projects/${id}`)
  }
  useEffect(() => {
    modalHigherRankOpen()
  }, [])
  return (
    <>
      <Flex h='100vh' direction='column' position='relative' minW='400px'>
        <Flex
          h='100%'
          bg='white'
          justifyContent='flex-start'
          boxShadow='xl'
          p='40px 48px 40px 24px'
          color='black'
          overflowY='scroll'
        >
          {(URL === 'http://localhost:3000/' ||
            URL === 'http://localhost:3000/notification' ||
            URL === 'http://localhost:3000/questions') && (
            <Flex direction='column'>
              <Flex w='328px' direction='column'>
                <Text
                  color='blue.800'
                  fontWeight='bold'
                  fontSize='22px'
                  mb='16px'
                >
                  参加中のプロジェクト
                </Text>
                <Flex direction='column' mb='48px'>
                  {inProgressProjects?.length ? (
                    <>
                      {inProgressProjects?.map((project) => (
                        <ProjectCard
                          key={project.id}
                          title={project.title}
                          categories={project.categories}
                          joinNumber={project.joinNumber}
                          acquisitionPoints={project.acquisitionPoints}
                          untilTheDeadline={project.untilTheDeadline}
                          status={project.status}
                          onClick={() => router.push(`/projects/${project.id}`)}
                        />
                      ))}
                    </>
                  ) : (
                    <Flex direction='column'>
                      <Text fontSize='14px' mb='6px'>
                        プロジェクトに参加してみましょう！
                      </Text>
                      <Flex alignItems='center'>
                        <Text
                          fontSize='12px'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          bgClip='text'
                          onClick={() => router.push('/projects')}
                          cursor='pointer'
                        >
                          プロジェクトをみてみる
                        </Text>
                        <GradientIcon>
                          <ArrowForwardIosIcon
                            sx={{
                              fill: 'url(#linearColors)',
                              fontSize: '12px',
                            }}
                          />
                        </GradientIcon>
                      </Flex>
                    </Flex>
                  )}
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Text
                  color='blue.800'
                  fontWeight='bold'
                  fontSize='22px'
                  mb='16px'
                >
                  過去に参加したプロジェクト
                </Text>
                <Flex direction='column' mb='48px'>
                  <VStack spacing='16px'>
                    {doneProjects?.map((project) => (
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        categories={project.categories}
                        joinNumber={project.joinNumber}
                        acquisitionPoints={project.acquisitionPoints}
                        untilTheDeadline={project.untilTheDeadline}
                        status={project.status}
                        onClick={() => router.push(`/projects/${project.id}`)}
                      />
                    ))}
                  </VStack>
                </Flex>
              </Flex>
            </Flex>
          )}
          {URL === 'http://localhost:3000/projects' && (
            <Flex direction='column'>
              <Flex w='328px' direction='column'>
                <Text
                  color='blue.800'
                  fontWeight='bold'
                  fontSize='22px'
                  mb='16px'
                >
                  🏆 ランキング
                </Text>
                <Flex
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  alignItems='center'
                  justifyContent='space-between'
                  p='8px 16px'
                  borderRadius='lg'
                  color='white'
                  mb='32px'
                >
                  <Flex alignItems='center'>
                    <Text mr='6px' fontWeight='bold'>
                      250
                    </Text>
                    <Avatar w='40px' h='40px' mr='8px' />
                    <Flex direction='column'>
                      <Text fontWeight='bold' fontSize='14px'>
                        まつもと
                      </Text>
                      <Text fontSize='12px' fontWeight='bold'>
                        @matsushoooo12
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontWeight='bold'>10💰</Text>
                </Flex>
                <RankingList rankingList={rankingList} />
              </Flex>
            </Flex>
          )}
          {(URL === `http://localhost:3000/users/${id}` ||
            URL === `http://localhost:3000/users/${id}/skils/edit`) && (
            <Flex direction='column'>
              <Flex w='328px' direction='column'>
                <Flex alignSelf='flex-end' mb='12px'>
                  <EditButton onClick={modalIntroductionOpen} />
                </Flex>
                <Flex
                  w='100%'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  borderRadius='2xl'
                  direction='column'
                  p='12px 16px'
                  mb='16px'
                  boxShadow='lg'
                >
                  <Flex alignItems='center' mb='10px'>
                    <Avatar w='64px' h='64px' mr='12px' />
                    <Flex direction='column' color='white'>
                      <Text fontSize='22px' fontWeight='bold'>
                        やまもとみずき
                      </Text>
                      <Text>@zukki</Text>
                    </Flex>
                  </Flex>
                  <HStack w='100%' spacing='8px'>
                    <Flex
                      w='33%'
                      h='56px'
                      bg='rgba(255, 255, 255, 0.1)'
                      borderRadius='4px'
                      direction='column'
                      alignItems='center'
                      justifyContent='center'
                      color='white'
                      fontWeight='bold'
                    >
                      <Text fontSize='12px'>ポイント</Text>
                      <Text fontSize='18px'>3,000</Text>
                    </Flex>
                    <Flex
                      w='33%'
                      h='56px'
                      bg='rgba(255, 255, 255, 0.1)'
                      borderRadius='4px'
                      direction='column'
                      alignItems='center'
                      justifyContent='center'
                      color='white'
                      fontWeight='bold'
                    >
                      <Text fontSize='12px'>フォロワー</Text>
                      <Text fontSize='18px'>15</Text>
                    </Flex>
                    <Flex
                      w='33%'
                      h='56px'
                      bg='rgba(255, 255, 255, 0.1)'
                      borderRadius='4px'
                      direction='column'
                      alignItems='center'
                      justifyContent='center'
                      color='white'
                      fontWeight='bold'
                    >
                      <Text fontSize='12px'>フォロー</Text>
                      <Text fontSize='18px'>99</Text>
                    </Flex>
                  </HStack>
                </Flex>
                <Flex
                  w='100%'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  borderRadius='10px'
                  p='24px 16px'
                  alignItems='center'
                  justifyContent='space-between'
                  mb='32px'
                  boxShadow='lg'
                >
                  <Flex direction='column'>
                    <Text
                      fontSize='32px'
                      fontWeight='bold'
                      color='white'
                      mb='2px'
                    >
                      Lv.32
                    </Text>
                    <Flex h='5px' mb='6px'>
                      <Flex
                        w='82px'
                        h='100%'
                        bg='white'
                        borderRadius='2px'
                      ></Flex>
                      <Flex
                        w='90px'
                        h='100%'
                        bg='gray.400'
                        borderRadius='2px'
                      ></Flex>
                    </Flex>
                    <Text
                      color='white'
                      fontSize='12px'
                      fontWeight='bold'
                      mb='6px'
                    >
                      あと2,000pt獲得でレベルアップ！
                    </Text>
                    <Flex alignItems='center' color='white'>
                      <Text fontWeight='bold' fontSize='22px'>
                        259<span style={{ fontSize: '15px' }}>位</span>
                      </Text>
                      <Text mx='8px' fontSize='14px'>
                        /
                      </Text>
                      <Text fontWeight='bold' fontSize='14px'>
                        3000
                        <span style={{ fontSize: '15px' }}>人</span>
                      </Text>
                    </Flex>
                  </Flex>
                  <Icon as={AiFillStar} fontSize='80px' color='yellow.300' />
                </Flex>
                {/* テキストがある場合 */}
                <Flex direction='column' mb='24px'>
                  <Text fontSize='14px'>
                    はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。
                    next.jsだいすき！！
                  </Text>
                  <Text fontSize='14px'>
                    将来は、個人開発で一発当てたい。野菜社主催
                    きゅうりハッカソン優勝。
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontWeight='bold' color='blue.700' mb='10px'>
                    SNS
                  </Text>
                  <HStack spacing='14px'>
                    <GithubButtonIcon />
                    <FacebookButtonIcon />
                    <TwitterButtonIcon />
                  </HStack>
                </Flex>
                {/* テキストがない場合 */}
                {/* <NewCreateCard
                  title='あなたについて書いてみよう！'
                  buttonText='プロフィールを書く'
                  onClick={modalIntroductionOpen}
                  isBoxShadow={true}
                >
                  <Text>プロフィールを書くと、ポイントがもらえるかも...🤭</Text>
                </NewCreateCard> */}
                {/* ここまで */}
              </Flex>
            </Flex>
          )}
          {(URL === `http://localhost:3000/projects/${id}` ||
            URL === `http://localhost:3000/projects/${id}/done` ||
            URL === `http://localhost:3000/projects/${id}/submit` ||
            URL === `http://localhost:3000/projects/${id}/vote`) && (
            <Flex direction='column'>
              <Flex w='328px' direction='column' mb='56px'>
                <Flex direction='column' mb='56px'>
                  {projectItem4?.status !== 'done' ? (
                    <>
                      {isLogin && (
                        <>
                          {URL ===
                            `http://localhost:3000/projects/${id}/submit` ||
                          URL ===
                            `http://localhost:3000/projects/${id}/vote` ? (
                            <>
                              <Text
                                mb='8px'
                                cursor='pointer'
                                color='white'
                                borderRadius='md'
                                boxShadow='lg'
                                fontWeight='bold'
                                w='100%'
                                py='14px'
                                textAlign='center'
                                bgGradient={gradientColor()}
                                opacity={projectItem4.isVoted && '50%'}
                                onClick={handleSubmit}
                              >
                                {projectButtonText(URL)}
                              </Text>
                              {projectItem4.status === 'recruitment' && (
                                <Text fontWeight='bold' mb='56px'>
                                  💸 参加するのに、80pt必要です
                                </Text>
                              )}
                              {projectItem4.status === 'production' && (
                                <Flex w='100%' mb='56px' direction='column'>
                                  <Text fontWeight='bold' mb='8px'>
                                    📌 提出済みのあなたの作品
                                  </Text>
                                  <UserWorksCard
                                    thumbnail={myWorks1.thumbnail}
                                    title={myWorks1.title}
                                    categories={myWorks1.categories}
                                    createdAt={myWorks1.createdAt}
                                    onClick={() => router.push(`/works/${id}`)}
                                  />
                                </Flex>
                              )}
                              {projectItem4.status === 'vote' && (
                                <>
                                  <Text fontWeight='bold' mb='8px'>
                                    📌 提出済みのあなたの作品
                                  </Text>
                                  <Flex w='100%' mb='56px'>
                                    <UserWorksCard
                                      thumbnail={myWorks1.thumbnail}
                                      title={myWorks1.title}
                                      categories={myWorks1.categories}
                                      createdAt={myWorks1.createdAt}
                                      onClick={() =>
                                        router.push(`/works/${myWorks1.id}`)
                                      }
                                    />
                                  </Flex>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <Text
                                mb='8px'
                                cursor='pointer'
                                color='white'
                                borderRadius='md'
                                boxShadow='lg'
                                fontWeight='bold'
                                w='100%'
                                py='14px'
                                textAlign='center'
                                bgGradient={gradientColor()}
                                opacity={projectItem4.isVoted && '50%'}
                                onClick={() => router.push(projectStatusLink())}
                              >
                                {projectButtonText()}
                              </Text>
                              {projectItem4.status === 'recruitment' && (
                                <>
                                  <Text fontWeight='bold' mb='56px'>
                                    💸 参加するのに、80pt必要です
                                  </Text>
                                  <Flex direction='column' mb='16px'>
                                    <Text fontWeight='bold'>
                                      💣 募集期間終了まで残り
                                    </Text>
                                    <Flex
                                      alignItems='flex-end'
                                      bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                      bgClip='text'
                                    >
                                      <Text
                                        fontSize='56px'
                                        fontWeight='bold'
                                        mr='4px'
                                      >
                                        32
                                      </Text>
                                      <Text
                                        fontSize='22px'
                                        fontWeight='bold'
                                        mb='14px'
                                      >
                                        時間（あと2日）
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </>
                              )}
                              {projectItem4.status === 'production' && (
                                <>
                                  <Flex w='100%' mb='56px' direction='column'>
                                    <Text fontWeight='bold' mb='8px'>
                                      📌 提出済みのあなたの作品
                                    </Text>
                                    <UserWorksCard
                                      thumbnail={myWorks1.thumbnail}
                                      title={myWorks1.title}
                                      categories={myWorks1.categories}
                                      createdAt={myWorks1.createdAt}
                                      onClick={() =>
                                        router.push(`/works/${id}`)
                                      }
                                    />
                                  </Flex>
                                  <Flex direction='column' mb='16px'>
                                    <Text fontWeight='bold'>
                                      💣 提出期間終了まで残り
                                    </Text>
                                    <Flex
                                      alignItems='flex-end'
                                      bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                      bgClip='text'
                                    >
                                      <Text
                                        fontSize='56px'
                                        fontWeight='bold'
                                        mr='4px'
                                      >
                                        32
                                      </Text>
                                      <Text
                                        fontSize='22px'
                                        fontWeight='bold'
                                        mb='14px'
                                      >
                                        時間（あと2日）
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </>
                              )}
                              {projectItem4.status === 'vote' && (
                                <>
                                  <Text fontWeight='bold' mb='8px'>
                                    📌 提出済みのあなたの作品
                                  </Text>
                                  <Flex w='100%' mb='56px'>
                                    <UserWorksCard
                                      thumbnail={myWorks1.thumbnail}
                                      title={myWorks1.title}
                                      categories={myWorks1.categories}
                                      createdAt={myWorks1.createdAt}
                                      onClick={() =>
                                        router.push(`/works/${myWorks1.id}`)
                                      }
                                    />
                                  </Flex>
                                  <Flex direction='column' mb='16px'>
                                    <Text fontWeight='bold'>
                                      💣 投票期間終了まで残り
                                    </Text>
                                    <Flex
                                      alignItems='flex-end'
                                      bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                      bgClip='text'
                                    >
                                      <Text
                                        fontSize='56px'
                                        fontWeight='bold'
                                        mr='4px'
                                      >
                                        32
                                      </Text>
                                      <Text
                                        fontSize='22px'
                                        fontWeight='bold'
                                        mb='14px'
                                      >
                                        時間（あと2日）
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                      <Flex direction='column' mb='16px'>
                        <Text fontWeight='bold'>💰集まったポイント</Text>
                        <Flex
                          alignItems='flex-end'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          bgClip='text'
                        >
                          <Text fontSize='56px' fontWeight='bold' mr='4px'>
                            3,000
                          </Text>
                          <Text fontSize='22px' fontWeight='bold' mb='14px'>
                            Pt
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex direction='column' mb='16px'>
                        <Text fontWeight='bold'>🙋🏻‍♀️ 参加者</Text>
                        <Flex
                          alignItems='flex-end'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          bgClip='text'
                        >
                          <Text fontSize='56px' fontWeight='bold' mr='4px'>
                            30
                          </Text>
                          <Text fontSize='22px' fontWeight='bold' mb='14px'>
                            人
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex spacing='4px' mb='4px' flexWrap='wrap'>
                        <Center
                          w='32px'
                          h='32px'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          borderRadius='full'
                          mr='4px'
                          mb='4px'
                        >
                          <Avatar w='28px' h='28px' />
                        </Center>
                        <Center
                          w='32px'
                          h='32px'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          borderRadius='full'
                          mr='4px'
                          mb='4px'
                        >
                          <Avatar w='28px' h='28px' />
                        </Center>
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                      </Flex>
                    </>
                  ) : (
                    <>
                      <Flex direction='column' mb='56px'>
                        <Text fontWeight='bold' fontSize='18px' mb='8px'>
                          あなたの結果
                        </Text>
                        <Flex
                          w='100%'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          borderRadius='2xl'
                          direction='column'
                          p='12px 16px'
                          mb='12px'
                          boxShadow='lg'
                        >
                          <HStack w='100%' spacing='8px'>
                            <Flex
                              w='33%'
                              h='56px'
                              bg='rgba(255, 255, 255, 0.1)'
                              borderRadius='4px'
                              direction='column'
                              alignItems='center'
                              justifyContent='center'
                              color='white'
                              fontWeight='bold'
                            >
                              <Text fontSize='12px'>ランキング</Text>
                              <Text fontSize='18px'>
                                {worksItem5.project.rank}
                              </Text>
                            </Flex>
                            <Flex
                              w='33%'
                              h='56px'
                              bg='rgba(255, 255, 255, 0.1)'
                              borderRadius='4px'
                              direction='column'
                              alignItems='center'
                              justifyContent='center'
                              color='white'
                              fontWeight='bold'
                            >
                              <Text fontSize='12px'>獲得ポイント</Text>
                              <Text fontSize='18px'>
                                {worksItem5.project.point}
                              </Text>
                            </Flex>
                            <Flex
                              w='33%'
                              h='56px'
                              bg='rgba(255, 255, 255, 0.1)'
                              borderRadius='4px'
                              direction='column'
                              alignItems='center'
                              justifyContent='center'
                              color='white'
                              fontWeight='bold'
                            >
                              <Text fontSize='12px'>作品閲覧数</Text>
                              <Text fontSize='18px'>
                                {worksItem5.project.views}
                              </Text>
                            </Flex>
                          </HStack>
                        </Flex>
                        <Flex
                          w='100%'
                          direction='column'
                          mb='12px'
                          boxShadow='lg'
                          borderRadius='lg'
                          p='16px'
                          borderWidth='1px'
                          borderColor='gray.200'
                        >
                          <ReviewChart
                            cx={145}
                            cy={120}
                            width={300}
                            height={228}
                            data={data}
                            outerRadius={100}
                          />
                        </Flex>
                      </Flex>
                      <Text fontWeight='bold' mb='8px'>
                        提出作品
                      </Text>
                      <Flex w='100%' mb='56px'>
                        <UserWorksCard
                          thumbnail={myWorks1.thumbnail}
                          title={myWorks1.title}
                          categories={myWorks1.categories}
                          createdAt={myWorks1.createdAt}
                          onClick={() => router.push(`/works/${myWorks1.id}`)}
                        />
                      </Flex>
                      <Flex direction='column' mb='16px'>
                        <Text fontWeight='bold'>💰集まったポイント</Text>
                        <Flex
                          alignItems='flex-end'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          bgClip='text'
                        >
                          <Text fontSize='56px' fontWeight='bold' mr='4px'>
                            3,000
                          </Text>
                          <Text fontSize='22px' fontWeight='bold' mb='14px'>
                            Pt
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex direction='column' mb='16px'>
                        <Text fontWeight='bold'>🙋🏻‍♀️ 参加者</Text>
                        <Flex
                          alignItems='flex-end'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          bgClip='text'
                        >
                          <Text fontSize='56px' fontWeight='bold' mr='4px'>
                            30
                          </Text>
                          <Text fontSize='22px' fontWeight='bold' mb='14px'>
                            人
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex spacing='4px' mb='4px' flexWrap='wrap'>
                        <Center
                          w='32px'
                          h='32px'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          borderRadius='full'
                          mr='4px'
                          mb='4px'
                        >
                          <Avatar w='28px' h='28px' />
                        </Center>
                        <Center
                          w='32px'
                          h='32px'
                          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                          borderRadius='full'
                          mr='4px'
                          mb='4px'
                        >
                          <Avatar w='28px' h='28px' />
                        </Center>
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                        <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                      </Flex>
                    </>
                  )}
                </Flex>
              </Flex>
            </Flex>
          )}
          {(URL ===
            `http://localhost:3000/projects/${id}/works/${myWorks1.id}` ||
            URL === `http://localhost:3000/works/${myWorks1.id}`) && (
            <Flex direction='column' mb='56px'>
              {currentUser ? (
                <Text fontWeight='bold' mb='8px'>
                  あなたの結果
                </Text>
              ) : (
                <Flex alignItems='center'>
                  <Text
                    fontWeight='bold'
                    fontSize='18px'
                    mb='8px'
                    mr='8px'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    bgClip='text'
                  >
                    やまもとみずき
                  </Text>
                  <Text fontWeight='bold' mb='8px'>
                    さんの結果
                  </Text>
                </Flex>
              )}
              <Flex
                w='100%'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                borderRadius='2xl'
                direction='column'
                p='12px 16px'
                mb='12px'
                boxShadow='lg'
              >
                {currentUser === 1 && (
                  <Flex alignItems='center' mb='10px'>
                    <Avatar w='64px' h='64px' mr='12px' />
                    <Flex direction='column' color='white'>
                      <Text fontSize='22px' fontWeight='bold'>
                        やまもとみずき
                      </Text>
                      <Text>@zukki</Text>
                    </Flex>
                  </Flex>
                )}
                <HStack w='100%' spacing='8px'>
                  <Flex
                    w='33%'
                    h='56px'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderRadius='4px'
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    color='white'
                    fontWeight='bold'
                  >
                    <Text fontSize='12px'>ランキング</Text>
                    <Text fontSize='18px'>{worksItem5.project.rank}</Text>
                  </Flex>
                  <Flex
                    w='33%'
                    h='56px'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderRadius='4px'
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    color='white'
                    fontWeight='bold'
                  >
                    <Text fontSize='12px'>獲得ポイント</Text>
                    <Text fontSize='18px'>{worksItem5.project.point}</Text>
                  </Flex>
                  <Flex
                    w='33%'
                    h='56px'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderRadius='4px'
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    color='white'
                    fontWeight='bold'
                  >
                    <Text fontSize='12px'>作品閲覧数</Text>
                    <Text fontSize='18px'>{worksItem5.project.views}</Text>
                  </Flex>
                </HStack>
              </Flex>
              <Flex
                w='100%'
                direction='column'
                mb='56px'
                boxShadow='lg'
                borderRadius='lg'
                p='16px'
                borderWidth='1px'
                borderColor='gray.200'
              >
                <ReviewChart
                  cx={145}
                  cy={120}
                  width={300}
                  height={228}
                  data={data}
                  outerRadius={100}
                />
              </Flex>
              <Flex direction='column' mb='16px'>
                <Text fontWeight='bold'>💰集まったポイント</Text>
                <Flex
                  alignItems='flex-end'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  bgClip='text'
                >
                  <Text fontSize='56px' fontWeight='bold' mr='4px'>
                    3,000
                  </Text>
                  <Text fontSize='22px' fontWeight='bold' mb='14px'>
                    Pt
                  </Text>
                </Flex>
              </Flex>
              <Flex direction='column' mb='16px'>
                <Text fontWeight='bold'>🙋🏻‍♀️ 参加者</Text>
                <Flex
                  alignItems='flex-end'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  bgClip='text'
                >
                  <Text fontSize='56px' fontWeight='bold' mr='4px'>
                    30
                  </Text>
                  <Text fontSize='22px' fontWeight='bold' mb='14px'>
                    人
                  </Text>
                </Flex>
              </Flex>
              <Flex spacing='4px' mb='4px' flexWrap='wrap'>
                <Center
                  w='32px'
                  h='32px'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  borderRadius='full'
                  mr='4px'
                  mb='4px'
                >
                  <Avatar w='28px' h='28px' />
                </Center>
                <Center
                  w='32px'
                  h='32px'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  borderRadius='full'
                  mr='4px'
                  mb='4px'
                >
                  <Avatar w='28px' h='28px' />
                </Center>
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
                <Avatar mb='4px' mr='4px' w='32px' h='32px' />
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      {/* エントリー完了モーダル */}
      {projectItem4.status === 'recruitment' && (
        <ModalCard
          cancelButtonText='閉じる'
          isOpen={isModalVisible}
          onClose={modalProjectClose}
          title='エントリーが完了しました'
          titleEmoji='🎉'
          size='lg'
        >
          <Flex mb='24px' color='black' fontWeight='bold' direction='column'>
            <Text mb='16px'>
              『{'{タイトル}'}』への参加を受け付けました！ あなたが{'{人数}'}
              人目の挑戦者です。この大会での賞金は{'{金額}'}です✨
            </Text>
            <Text>ご武運をお祈りしております！</Text>
          </Flex>
        </ModalCard>
      )}
      {/* 提出完了モーダル */}
      {projectItem4.status === 'production' && (
        <ModalCard
          cancelButtonText='閉じる'
          isOpen={isModalVisible}
          onClose={modalProjectClose}
          title='提出が完了しました'
          titleEmoji='🎉'
          size='lg'
        >
          <Flex mb='24px' color='black' fontWeight='bold' direction='column'>
            <Text mb='16px'>
              お疲れさまです！『{'{タイトル}'}』の作品を提出しました！
            </Text>
            <Text>
              {'{YYYY / MM / DD}'} から始まる作品投票でまたお会いしましょう☺️
            </Text>
          </Flex>
        </ModalCard>
      )}
      {/* 投票完了モーダル */}
      {projectItem4.status === 'vote' && (
        <ModalCard
          cancelButtonText='閉じる'
          isOpen={isModalVisible}
          onClose={modalProjectClose}
          title='投票が完了しました'
          titleEmoji='🎉'
          size='lg'
        >
          <Text mb='24px' color='black' fontWeight='bold'>
            『{'{タイトル}'}』の投票が完了しました。 {'{YYYY / MM / DD}'}
            に結果が発表されます。この大会での賞金{'{金額}'}
            は誰が獲得するのでしょうか？！
          </Text>
        </ModalCard>
      )}
      {/* 自己紹介フォームモーダル */}
      <ModalCard
        cancelButtonText='キャンセル'
        submitButtonText='追加する'
        isOpen={isIntroduction}
        onClose={modalIntroductionClose}
        title='自己紹介を入力'
        size='lg'
      >
        <Textarea
          height='160px'
          fontSize='14px'
          placeholder='あなたについて書いてみましょう！'
          focusBorderColor='gray.200'
          _placeholder={{ color: 'gray.400' }}
          mb='24px'
        />
        <Flex direction='column' mb='24px'>
          <Text fontSize='14px' fontWeight='bold' mb='12px'>
            SNS・各種リンク
          </Text>
          <HStack spacing='16px' mb='12px'>
            <Input
              variant='flushed'
              placeholder='SNS名・リンク先名'
              fontSize='14px'
              focusBorderColor='gray.200'
              _placeholder={{ color: 'gray.400' }}
            />
            <Input
              variant='flushed'
              placeholder='URL'
              fontSize='14px'
              focusBorderColor='gray.200'
              _placeholder={{ color: 'gray.400' }}
            />
          </HStack>
          <Flex alignItems='center' cursor='pointer'>
            <GradientIcon>
              <AddIcon sx={{ fontSize: '12px', fill: 'url(#linearColors)' }} />
            </GradientIcon>
            <Text
              fontSize='12px'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              リンクを追加する
            </Text>
          </Flex>
        </Flex>
      </ModalCard>
      {/* 1位モーダル */}
      {/* <Modal
        isCentered
        onClose={modalHigherRankClose}
        isOpen={isOpenHigherRankModal}
        motionPreset='slideInBottom'
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p='32px'>
            <Flex
              mb='24px'
              alignItems='center'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              direction='column'
            >
              <Text fontSize='18px'>【結果発表】</Text>
              <Text fontSize='22px'>あなたの作品が１位に選ばれました！</Text>
            </Flex>
            <Flex direction='column' alignItems='center' w='100%' mb='12px'>
              <Image
                w='240px'
                h='240px'
                src='https://user-images.githubusercontent.com/66903388/212949204-6f573898-5be9-4636-bff1-ccaaf723034e.gif'
                alt=''
                mb='12px'
              />
              <Flex
                direction='column'
                fontSize='14px'
                alignItems='center'
                fontWeight='bold'
              >
                <Text>
                  『{`{タイトル}`}』の結果がでました。おめでとうございます🎉
                </Text>
                <Text>
                  今後もたくさんのプロジェクトに参加して、実績をつくっていきましょう！
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems='center' justifyContent='flex-end'>
              <HStack spacing='12px' alignItems='center' fontWeight='bold'>
                <Flex
                  p='12px 24px'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  bgClip='text'
                  borderRadius='md'
                  cursor='pointer'
                  onClick={modalHigherRankClose}
                >
                  今はしない
                </Flex>
                <PrimaryButton>結果を見る</PrimaryButton>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      {/* 8位モーダル */}
      <Modal
        isCentered
        onClose={modalHigherRankClose}
        isOpen={isOpenHigherRankModal}
        motionPreset='slideInBottom'
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p='32px'>
            <Flex
              mb='24px'
              alignItems='center'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              direction='column'
            >
              <Text fontSize='18px'>【結果発表】</Text>
              <Text fontSize='22px'>あなたの作品が8位に選ばれました！</Text>
            </Flex>
            <Flex direction='column' alignItems='center' w='100%' mb='12px'>
              <Image
                w='247px'
                h='169px'
                src='https://user-images.githubusercontent.com/66903388/213195078-062f291e-f3d2-4ebd-8c60-bbfc1b081cd4.png'
                alt=''
                mb='12px'
              />
              <Flex
                direction='column'
                fontSize='14px'
                alignItems='center'
                fontWeight='bold'
              >
                <Text>
                  『{`{タイトル}`}』の結果がでました。おめでとうございます🎉
                </Text>
                <Text>
                  今後もたくさんのプロジェクトに参加して、実績をつくっていきましょう！
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems='center' justifyContent='flex-end'>
              <HStack spacing='12px' alignItems='center' fontWeight='bold'>
                <Flex
                  p='12px 24px'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  bgClip='text'
                  borderRadius='md'
                  cursor='pointer'
                  onClick={modalHigherRankClose}
                >
                  今はしない
                </Flex>
                <PrimaryButton>結果を見る</PrimaryButton>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RightSidebar
