import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import { Back } from '~/assets/svg'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({ children, items = [], onClickLogout }) {
  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]
  const choose = current.choose
  const classes = (item, i) => {
    return cx('menuItem', {
      ['menuItem_language']: history.length > 1 && 'menuItem_language',
      ['languageChoose']: choose && choose === item.code,
      ['separate']: item.separate,
    })
  }

  const renderItems = () => {
    return current.data.map((item, i) => {
      return (
        <Button
          className={classes(item, i)}
          hasIcon
          key={i}
          left={item.icon}
          to={item.to ? item.to : false}
          onClick={() => {
            if (item.children) {
              setHistory((prev) => [...prev, item.children])
            }
            if (onClickLogout && i === current.data.length - 1) {
              onClickLogout()
            }
          }}
        >
          {item.title}
        </Button>
      )
    })
  }

  return (
    <Tippy
      interactive
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1))
      }}
      appendTo={() => document.body}
      delay={[0, 500]}
      offset={[12, 10]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx('menuList')} tabIndex='-1' {...attrs}>
          <PopperWrapper className={cx('menuPopper')}>
            {history.length > 1 && (
              <Button
                onClick={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }}
                className={cx('headerLanguage')}
                hasIcon
                left={<Back />}
              >
                Language
              </Button>
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
