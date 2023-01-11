import { useContext } from 'react'
import DashboardContainer from '../components/templates/DashboardContainer'
import TopContainer from '../components/templates/TopContainer'
import { AuthContext } from './_app'

export default function Home() {
  const { isLogin } = useContext(AuthContext)
  return <>{isLogin ? <DashboardContainer /> : <TopContainer />}</>
}
