import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Logo, Xmark, Search } from '~/assets/svg'
// Loading, , , Upload, Mess, Noti

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        <Logo />

        <div className={cx('centerContainer')}>
          <div className={cx('formContainer')}>
            <form className={cx('searchInput')}>
              <input
                type='search'
                placeholder='Search accounts and videos'
                className={cx('inputElement')}
              />
              <div className={cx('loadingIcon')}>
                <Xmark />
              </div>
              <span className={cx('split')}></span>
              <button className={cx('buttonSearch')}>
                <Search />
              </button>
            </form>
          </div>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </div>
  )
}

export default Header
