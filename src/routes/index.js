import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profile from '~/pages/Profile'
import { HeaderOnly } from '~/components/Layout'

// Don't Need Login
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile/:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
