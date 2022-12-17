import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from '../components/Header'
import Sidebar from './Sidebar'
import GetApp from '../components/GetApp'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('main')}>
          {children}
          <GetApp />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
