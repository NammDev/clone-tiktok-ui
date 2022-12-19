import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import Tippy from '@tippyjs/react/headless'
import { PopperWrapper, ContentSuggest, UserSuggest } from '~/components/Popper'
import { Loading, Xmark, Search } from '~/assets/svg'
import { useState, useEffect, useRef } from 'react'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)
const URL_SEARCH_USER = 'https://tiktok.fullstack.edu.vn/api/users/search'

function SearchResult() {
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [visible, setVisible] = useState(true)
  const [loading, setLoading] = useState(false)

  const debounced = useDebounce(inputSearch, 500)

  const inputRef = useRef(null)

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([])
      return
    }
    setLoading(true)
    fetch(`${URL_SEARCH_USER}?q=${encodeURIComponent(debounced)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        if (res.status_code !== 422) {
          return setSearchResult(res.data)
        }
      })
      .catch(() => setLoading(false))
  }, [debounced])

  return (
    <div className={cx('centerContainer')}>
      <div className={cx('formContainer')}>
        <Tippy
          interactive
          appendTo={() => document.body}
          visible={visible && searchResult.length > 0}
          onClickOutside={() => setVisible(false)}
          render={(attrs) => (
            <div className={cx('searchResult')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <ContentSuggest content={`${inputSearch} suggest`} />
                {searchResult.map((user) => (
                  <ContentSuggest key={user.id} content={user.nickname} />
                ))}
                <div className={cx('sugAccount')}>Accounts</div>
                {searchResult.map((user) => (
                  <UserSuggest key={user.id} user={user} />
                ))}
                <div className={cx('sugResult')}>
                  <p>View all results for "{inputSearch}"</p>
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <form className={cx('searchInput')}>
            <input
              ref={inputRef}
              style={inputSearch ? { width: '252px' } : { width: '292px' }}
              onChange={(e) => {
                if (e.target.value.length > 0 && e.target.value === ' ') {
                  return
                }
                setInputSearch(e.target.value)
              }}
              onFocus={() => {
                if (inputSearch.length > 0) setVisible(true)
              }}
              value={inputSearch}
              type='search'
              placeholder='Search accounts and videos'
              className={cx('inputElement')}
            />
            {loading && (
              <div className={cx('loadingIcon')}>
                <Loading className={cx('loadingCircle')} />
              </div>
            )}
            {inputSearch && !loading && (
              <Xmark
                onClick={() => {
                  setInputSearch('')
                  setVisible(false)
                  inputRef.current.focus()
                }}
              />
            )}
            <span className={cx('split')}></span>
            <button type='button' className={cx('buttonSearch')}>
              <Search fill={inputSearch ? `rgba(22, 24, 35, .75)` : 'rgba(22, 24, 35, .34)'} />
            </button>
            <div className={cx('inputBorder')}></div>
          </form>
        </Tippy>
      </div>
    </div>
  )
}

export default SearchResult
