import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import { HeaderOnly } from '~/components/Layout'

// Don't Need Login
const publicRoutes = [
  { path: '/', component: Home, layout: null },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
