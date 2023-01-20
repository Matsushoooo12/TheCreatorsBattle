import { useRouter } from 'next/router'

export const useGetStatus = (status, isVoted, isSubmit) => {
  const router = useRouter()
  const { id } = router.query
  const gradientColor = () => {
    if (status === 'recruitment') {
      return 'linear(to-r, purple.300, purple.600)'
    } else if (status === 'production') {
      return 'linear(to-r, green.300, green.600)'
    } else if (status === 'vote') {
      return 'linear(to-r, orange.300, orange.500)'
    } else if (status === 'done') {
      return 'linear(to-r, gray.500, gray.900)'
    }
  }
  const statusText = () => {
    if (status === 'recruitment') {
      return '募集期間'
    } else if (status === 'production') {
      return '制作期間'
    } else if (status === 'vote') {
      return '投票期間'
    } else {
      return '終了'
    }
  }
  const projectButtonText = (url) => {
    if (status === 'recruitment') {
      return '参加する >'
    } else if (status === 'production') {
      if (url !== `http://localhost:3000/projects/${id}/submit`) {
        if (!isSubmit) {
          return '提出する >'
        } else {
          return '再提出する >'
        }
      } else {
        return '提出完了する'
      }
    } else if (status === 'vote') {
      if (url !== `http://localhost:3000/projects/${id}/vote`) {
        if (!isVoted) {
          return '投票する >'
        } else {
          return '投票済み'
        }
      } else {
        return '投票完了する'
      }
    } else if (status === 'done') {
      return '結果を見る >'
    }
  }
  return {
    gradientColor,
    statusText,
    projectButtonText,
  }
}
