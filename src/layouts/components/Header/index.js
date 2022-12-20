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
import config from '~/config'

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
          title: 'Polski (Polska)',
        },
        {
          code: 'in ',
          title: 'Basarawa',
        },
        {
          code: 'po',
          title: 'Korea',
        },
        {
          code: 'vi',
          title: '한국어 (대한민국)',
        },
        {
          code: 'it',
          title: 'Bahasa Melayu (Malaysia)',
        },
        {
          code: 'po',
          title: 'မြန်မာ (မြန်မာ)',
        },
        {
          code: 'in ',
          title: 'Українська (Україна)',
        },
        {
          code: 'po',
          title: 'Português (Brasil)',
        },
        {
          code: 'vi',
          title: 'Türkçe (Türkiye)',
        },
        {
          code: 'it',
          title: 'ไทย (ไทย)',
        },
        {
          code: 'po',
          title: 'Svenska (Sverige)',
        },
        {
          code: 'in ',
          title: 'Русский (Россия)',
        },

        {
          code: 'po',
          title: 'Română (Romania)',
        },
        {
          code: 'vi',
          title: 'العربية',
        },
        {
          code: 'it',
          title: 'বাঙ্গালি (ভারত)',
        },
        {
          code: 'po',
          title: 'Cebuano (Pilipinas)',
        },
        {
          code: 'in ',
          title: 'Deutsch',
        },
        {
          code: 'in ',
          title: 'Čeština (Česká republika)',
        },
        {
          code: 'po',
          title: 'Ελληνικά (Ελλάδα)',
        },
      ],
    },
  },
  { icon: <Feedback />, title: 'Feedback and help', to: config.routes.upload },
  { icon: <Keyboard />, title: 'Keyboard shortcuts', to: config.routes.upload },
]
const userMenu = [
  { icon: <Profile />, title: 'View Profile', to: config.routes.profile },
  { icon: <TiktokCircle />, title: 'Get Coins' },
  { icon: <Live />, title: 'LIVE Studio' },
  { icon: <Settings />, title: 'Settings' },
  menuItems[0],
  { icon: <Feedback />, title: 'Feedback and help', to: config.routes.upload },
  { icon: <Keyboard />, title: 'Keyboard shortcuts', to: config.routes.home },
  { icon: <Logout />, title: 'Log out', separate: true },
]

function Header() {
  const [hasUser, setHasUser] = useState(false)

  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        {/* prettier-ignore */}
        <Link style={{display: 'flex'}} to={config.routes.home}><Logo /></Link>
        <SearchResult />
        <div className={cx('actions')}>
          {hasUser ? (
            <>
              <Button to={config.routes.upload} hasIcon left={<Addition />}>
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
              <Button to={config.routes.upload} hasIcon left={<Addition />}>
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
