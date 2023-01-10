import { useContext } from 'react'
import { AuthContext } from './_app'
import TopContainer from '../components/templates/TopContainer'
import DashboardContainer from '../components/templates/DashboardContainer'

export default function Home() {
  const { isLogin } = useContext(AuthContext)
  return <>{isLogin ? <DashboardContainer /> : <TopContainer />}</>
}
