import classNames from 'classnames/bind'
import styles from './SearchUser.module.scss'
import { CircleCheck } from '~/assets/svg'

const cx = classNames.bind(styles)

function SearchUser({ imgUrl, name, account, checked }) {
  return (
    <div className={cx('userItem')}>
      <span shape='circle' className={cx('avatarContainer')}>
        <img src={imgUrl}></img>
      </span>
      <div className={cx('userContent')}>
        <h4>
          {account}
          {checked && <CircleCheck />}
        </h4>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default SearchUser
