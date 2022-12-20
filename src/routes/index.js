import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profile from '~/pages/Profile'
import { HeaderOnly } from '~/layouts'
import routesConfig from '~/config/routes'

// Don't Need Login
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
