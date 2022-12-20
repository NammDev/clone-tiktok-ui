import classNames from 'classnames/bind'
import styles from './SearchText.module.scss'
import { Search } from '~/assets/svg'

const cx = classNames.bind(styles)

function SearchText({ content }) {
  return (
    <div className={cx('textItem')}>
      <div className={cx('textItem__icon')}>
        <Search width='15' height='15' fill='currentColor' />
      </div>
      <div className={cx('textItem__content')}>
        <h4>{content}</h4>
      </div>
    </div>
  )
}

export default SearchText
