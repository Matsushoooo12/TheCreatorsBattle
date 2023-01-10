import { useRouter } from 'next/router'

export const useGetUrl = () => {
  const { asPath } = useRouter()
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  const URL = `${origin}${asPath}`
  return {
    URL,
  }
}
