import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import styles from './Header.module.scss'
import { Menu } from '~/components/Popper'
import {
  Logo,
  Addition,
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
import ImageBg from '~/components/ImageBg'
import SearchResult from '../Search'

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

  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        {/* prettier-ignore */}
        <Link to='/'><Logo /></Link>
        <SearchResult />
        <div className={cx('actions')}>
          {hasUser ? (
            <>
              <Button to='/upload' hasIcon left={<Addition />}>
                Upload
              </Button>
              <Tippy delay={[0, 50]} placement='bottom' content='Messages'>
                <div className={cx('messages')}>
                  <Messages />
                </div>
              </Tippy>
              <Tippy delay={[0, 50]} placement='bottom' content='Inbox'>
                <div className={cx('inbox')}>
                  <Inbox />
                  <span className={cx('badge')}>12</span>
                </div>
              </Tippy>

              <Menu
                items={userMenu}
                onClickLogout={() => {
                  setHasUser(false)
                }}
              >
                <ImageBg
                  src={
                    'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1658379194980357~c5_720x720.jpeg?x-expires=1671609600&x-signature=VXLdaifQM3TYUZNOWpBfgShsnf0%3D'
                  }
                  wid={32}
                  ml={24}
                />
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
