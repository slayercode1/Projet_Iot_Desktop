import { useEffect, useState } from 'react'
import SplashScreen from '../components/splash-screen'
import { RouterProvider } from 'react-router-dom'
import router from '../navigations'
function Router() {
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, [])

  useEffect(() => {
    //get /add in url
    const url = window.location.href
    const urlSplit = url.split('/')
    const urlLast = urlSplit[urlSplit.length - 1]
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobile = /mobile|android|iphone|ipad|iemobile|wpdesktop/i.test(
      userAgent,
    )

    if (!isMobile && urlLast === 'add') {
      window.location.href = '/home'
    }
  }, [])

  return (
    <div>
      {!spinner ? <RouterProvider router={router} /> : <SplashScreen />}
    </div>
  )
}
export default Router
