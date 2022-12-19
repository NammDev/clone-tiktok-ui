import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import Tippy from '@tippyjs/react/headless'
import { PopperWrapper, ContentSuggest, UserSuggest } from '~/components/Popper'
import { Loading, Xmark, Search } from '~/assets/svg'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function SearchResult() {
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [visible, setVisible] = useState(true)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  useEffect(() => {
    if (searchResult.length > 0 && inputSearch.length > 0) {
      show()
    } else {
      hide()
    }
  }, [searchResult])

  const handleChange = (e) => {
    setInputSearch(e.target.value)
    setTimeout(() => {
      setSearchResult((prev) => [...prev, e.target.value])
    }, 1000)
  }

  return (
    <div className={cx('centerContainer')}>
      <div className={cx('formContainer')}>
        <Tippy
          interactive
          appendTo={() => document.body}
          visible={visible}
          onClickOutside={hide}
          render={(attrs) => (
            <div className={cx('searchResult')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <ContentSuggest content='speed' />
                <ContentSuggest content='Son Tung MT-P' />
                <ContentSuggest content='story tam trang' />
                <ContentSuggest content='schannel' />
                <ContentSuggest content='say you do' />
                <div className={cx('sugAccount')}>Accounts</div>
                <UserSuggest
                  imgUrl='https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1654724776460294~c5_300x300.webp?x-expires=1671476400&x-signature=%2FjiVmeeUMSgZyi1lsxMU0ZyzhHk%3D'
                  account='sukiluser'
                  name='Sookilooser'
                />
                <UserSuggest
                  imgUrl='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6b877195e47479c56fc6193582e91dac~c5_300x300.webp?x-expires=1671476400&x-signature=YZZXmGVZ48Ntygqb4uq5kVHYFsY%3D'
                  account='serhant'
                  name='SERHANT.'
                  checked
                />
                <div className={cx('sugResult')}>
                  <p>View all results for "{inputSearch}"</p>
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <form className={cx('searchInput')}>
            <input
              style={visible ? { width: '252px' } : { width: '292px' }}
              onChange={handleChange}
              value={inputSearch}
              type='search'
              placeholder='Search accounts and videos'
              className={cx('inputElement')}
            />
            {visible && (
              // <div className={cx('loadingIcon')}>
              //   <Loading className={cx('loadingCircle')} />
              // </div>
              <Xmark />
            )}
            <span className={cx('split')}></span>
            <button type='button' className={cx('buttonSearch')}>
              <Search />
            </button>
            <div className={cx('inputBorder')}></div>
          </form>
        </Tippy>
      </div>
    </div>
  )
}

export default SearchResult
