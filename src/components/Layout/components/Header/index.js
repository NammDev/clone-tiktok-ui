import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        <Link className={cx('logo')} to='/'>
          TikTok
        </Link>
        <div className={cx('search')}>Search</div>
        <div className={cx('rightContainer')}> Upload - Avatar</div>
      </div>
    </div>
  )
}

export default Header
