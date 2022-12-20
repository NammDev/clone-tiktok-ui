import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <div className={cx('sideBar')}>
      <div className={cx('wrapper')}>
        <div className={cx('scrollContainer')}></div>
        <div className={cx('scrollBar')}></div>
      </div>
    </div>
  )
}

export default Sidebar
