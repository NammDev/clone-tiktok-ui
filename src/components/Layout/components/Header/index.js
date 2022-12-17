import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Logo, Loading, Xmark, Button, Upload, Mess, Noti } from '~/assets/svg'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        <Link className={cx('logo')} to='/upload'>
          <Logo />
        </Link>

        <div className={cx('search')}>
          <Loading />
          <Xmark />
        </div>
        <div className={cx('actions')}></div>
      </div>
    </div>
  )
}

export default Header
