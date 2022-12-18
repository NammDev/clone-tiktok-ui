import classNames from 'classnames/bind'
import styles from './GetApp.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function GetApp() {
  return (
    <div className={cx('wrapper')}>
      <Button className={cx('getApp')}>Get app</Button>
    </div>
  )
}

export default GetApp
