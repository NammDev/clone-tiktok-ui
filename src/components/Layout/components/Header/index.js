import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import styles from './Header.module.scss'
import { Logo, Xmark, Search } from '~/assets/svg'
// Loading, , , Upload, Mess, Noti

const cx = classNames.bind(styles)

function Header() {
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [visible, setVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  useEffect(() => {
    if (searchResult.length > 0) {
      show()
    }
  }, [inputSearch, searchResult])

  const handleChange = (e) => {
    setInputSearch(e.target.value)
    setTimeout(() => {
      setSearchResult([1, 2])
    }, 2000)
  }

  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        <Logo />

        <div className={cx('centerContainer')}>
          <div className={cx('formContainer')}>
            <form className={cx('searchInput')}>
              <Tippy
                visible={visible}
                onClickOutside={hide}
                render={(attrs) => (
                  <div className={cx('searchResult')} tabIndex='-1' {...attrs}>
                    My tippy box
                  </div>
                )}
              >
                <input
                  onChange={handleChange}
                  value={inputSearch}
                  type='search'
                  placeholder='Search accounts and videos'
                  className={cx('inputElement')}
                />
              </Tippy>
              <div className={cx('loadingIcon')}>
                <Xmark />
              </div>
              <span className={cx('split')}></span>
              <button className={cx('buttonSearch')}>
                <Search />
              </button>
              <div className={cx('inputBorder')}></div>
            </form>
          </div>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </div>
  )
}

export default Header
