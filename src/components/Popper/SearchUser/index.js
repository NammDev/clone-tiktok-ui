import classNames from 'classnames/bind'
import styles from './SearchUser.module.scss'
import { CircleCheck } from '~/assets/svg'
import ImageSrc from '~/components/ImageSrc'

const cx = classNames.bind(styles)

function SearchUser({ user }) {
  const { avatar, nickname, last_name, tick } = user
  return (
    <div className={cx('userItem')}>
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
    </div>
  )
}

export default SearchUser
