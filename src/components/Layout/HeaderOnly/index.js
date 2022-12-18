import classNames from 'classnames/bind'
import Header from '../components/Header'
import styles from '../DefaultLayout/DefaultLayout.module.scss'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container', 'containerHeaderOnly')}>{children}</div>
    </div>
  )
}

export default HeaderOnly
