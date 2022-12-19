import classNames from 'classnames/bind'
import styles from './SearchUser.module.scss'
import { CircleCheck } from '~/assets/svg'
import ImageSrc from '~/components/ImageSrc'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function SearchUser({ user, onClick }) {
  const { avatar, nickname, last_name, tick } = user
  return (
    <Link to={`/profile/${nickname}`} className={cx('userItem')} onClick={onClick}>
      <span shape='circle' className={cx('avatarContainer')}>
        <ImageSrc className={cx('avatar')} src={avatar} alt={nickname} />
      </span>
      <div className={cx('userContent')}>
        <h4>
          {nickname}
          {tick && <CircleCheck />}
        </h4>
        <p>{last_name}</p>
      </div>
    </Link>
  )
}

export default SearchUser
