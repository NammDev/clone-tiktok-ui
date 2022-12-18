import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({ children, items }) {
  const renderItems = () => {
    return items.map((item, i) => (
      <Button className={cx('menuItem')} hasIcon key={i} left={item.icon}>
        {item.title}
      </Button>
    ))
  }

  return (
    <Tippy
      interactive
      appendTo={() => document.body}
      distance={100}
      delay={[0, 700]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx('menuList')} tabIndex='-1' {...attrs}>
          <PopperWrapper className={cx('menuPopper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
