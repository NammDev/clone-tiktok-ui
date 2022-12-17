import classNames from 'classnames/bind'
import styles from './GetApp.module.scss'

const cx = classNames.bind(styles)

function GetApp() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('button')}></div>
    </div>
  )
}

export default GetApp
