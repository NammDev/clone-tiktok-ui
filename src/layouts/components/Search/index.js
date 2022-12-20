import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import Tippy from '@tippyjs/react/headless'
import { Loading, Xmark, Search } from '~/assets/svg'
import { PopperWrapper } from '~/components/Popper'
import UserSuggest from './SearchUser'
import ContentSuggest from './SearchText'
import { useState, useEffect, useRef } from 'react'
import { useDebounce } from '~/hooks'
import * as searchService from '~/services/searchService'

const cx = classNames.bind(styles)

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
    // Fetch API
    const fetchApi = async () => {
      setLoading(true)
      try {
        const res = await searchService.search(debounced)
        if (res.status_code !== 422) {
          return setSearchResult(res.data)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchApi()
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
                  <UserSuggest
                    key={user.id}
                    user={user}
                    onClick={() => {
                      setVisible(false)
                      setInputSearch('')
                    }}
                  />
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
                const searchValue = e.target.value
                if (!searchValue.startsWith(' ')) {
                  setInputSearch(searchValue)
                }
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
                  setVisible(false)
                  setInputSearch('')
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
