import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import TippyStyle from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import styles from './Header.module.scss'
import { PopperWrapper, ContentSuggest, UserSuggest, Menu } from '~/components/Popper'
import {
  Logo,
  Addition,
  Loading,
  Search,
  Keyboard,
  Language,
  Feedback,
  More,
  Inbox,
  Messages,
  Profile,
  TiktokCircle,
  Live,
  Settings,
  Logout,
} from '~/assets/svg'
import Button from '~/components/Button'

const cx = classNames.bind(styles)
const menuItems = [
  {
    icon: <Language />,
    title: 'English',
    children: {
      title: 'Language',
      choose: 'en',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'it',
          title: 'Italiano',
        },
        {
          code: 'po',
          title: 'Polski',
        },
        {
          code: 'in ',
          title: 'Basarawa',
        },
        {
          code: 'po',
          title: 'Korea',
        },
      ],
    },
  },
  { icon: <Feedback />, title: 'Feedback and help', to: '/upload' },
  { icon: <Keyboard />, title: 'Keyboard shortcuts', to: '/upload' },
]
const userMenu = [
  { icon: <Profile />, title: 'View Profile' },
  { icon: <TiktokCircle />, title: 'Get Coins' },
  { icon: <Live />, title: 'LIVE Studio' },
  { icon: <Settings />, title: 'Settings' },
  {
    icon: <Language />,
    title: 'English',
    children: {
      title: 'Language',
      choose: 'en',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'it',
          title: 'Italiano',
        },
        {
          code: 'po',
          title: 'Polski',
        },
        {
          code: 'in ',
          title: 'Basarawa',
        },
        {
          code: 'po',
          title: 'Korea',
        },
      ],
    },
  },
  { icon: <Feedback />, title: 'Feedback and help', to: '/upload' },
  { icon: <Keyboard />, title: 'Keyboard shortcuts', to: '/' },
  { icon: <Logout />, title: 'Log out', separate: true },
]

function Header() {
  const [hasUser, setHasUser] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [visible, setVisible] = useState(true)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  useEffect(() => {
    if (searchResult.length > 0 && inputSearch.length > 0) {
      show()
    } else {
      hide()
    }
  }, [searchResult])

  const handleChange = (e) => {
    setInputSearch(e.target.value)
    setTimeout(() => {
      setSearchResult([1, 2])
    }, 1000)
  }

  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        <Link to='/'>
          <Logo />
        </Link>
        <div className={cx('centerContainer')}>
          <div className={cx('formContainer')}>
            <Tippy
              interactive
              appendTo={() => document.body}
              visible={visible}
              onClickOutside={hide}
              render={(attrs) => (
                <div className={cx('searchResult')} tabIndex='-1' {...attrs}>
                  <PopperWrapper>
                    <ContentSuggest content='speed' />
                    <ContentSuggest content='Son Tung MT-P' />
                    <ContentSuggest content='story tam trang' />
                    <ContentSuggest content='schannel' />
                    <ContentSuggest content='say you do' />
                    <div className={cx('sugAccount')}>Accounts</div>
                    <UserSuggest
                      imgUrl='https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1654724776460294~c5_300x300.webp?x-expires=1671476400&x-signature=%2FjiVmeeUMSgZyi1lsxMU0ZyzhHk%3D'
                      account='sukiluser'
                      name='Sookilooser'
                    />
                    <UserSuggest
                      imgUrl='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6b877195e47479c56fc6193582e91dac~c5_300x300.webp?x-expires=1671476400&x-signature=YZZXmGVZ48Ntygqb4uq5kVHYFsY%3D'
                      account='serhant'
                      name='SERHANT.'
                      checked
                    />
                    <div className={cx('sugResult')}>
                      <p>View all results for "{inputSearch}"</p>
                    </div>
                  </PopperWrapper>
                </div>
              )}
            >
              <form className={cx('searchInput')}>
                <input
                  style={visible ? { width: '252px' } : { width: '292px' }}
                  onChange={handleChange}
                  value={inputSearch}
                  type='search'
                  placeholder='Search accounts and videos'
                  className={cx('inputElement')}
                />
                <div className={cx('loadingIcon')}>
                  {visible && <Loading className={cx('loadingCircle')} />}
                </div>
                <span className={cx('split')}></span>
                <button type='button' className={cx('buttonSearch')}>
                  <Search />
                </button>
                <div className={cx('inputBorder')}></div>
              </form>
            </Tippy>
          </div>
        </div>
        <div className={cx('actions')}>
          {hasUser ? (
            <>
              <Button to='/upload' hasIcon left={<Addition />}>
                Upload
              </Button>
              <TippyStyle placement='bottom' content='Messages'>
                <div className={cx('messages')}>
                  <Messages />
                </div>
              </TippyStyle>
              <TippyStyle placement='bottom' content='Inbox'>
                <div className={cx('inbox')}>
                  <Inbox />
                </div>
              </TippyStyle>

              <Menu
                items={userMenu}
                onClickLogout={() => {
                  setHasUser(false)
                }}
              >
                <div className={cx('profileContainer')} />
              </Menu>
            </>
          ) : (
            <>
              <Button to='/upload' hasIcon left={<Addition />}>
                Upload
              </Button>
              <Button
                onClick={() => {
                  setHasUser(true)
                }}
              >
                Log in
              </Button>
              <Menu items={menuItems}>
                <i className={cx('iconWrapper')}>
                  <More />
                </i>
              </Menu>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
