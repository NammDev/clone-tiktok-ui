import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import Tippy from '@tippyjs/react/headless'
import { PopperWrapper, ContentSuggest, UserSuggest } from '~/components/Popper'
import { Xmark, Search } from '~/assets/svg'
import { useState, useEffect, useRef } from 'react'

const cx = classNames.bind(styles)

function SearchResult() {
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [visible, setVisible] = useState(true)

  const inputRef = useRef(null)

  useEffect(() => {
    if (searchResult.length > 0 && inputSearch.length > 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [searchResult, inputSearch])

  useEffect(() => {
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${inputSearch}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status_code !== 422) {
          return setSearchResult(res.data)
        }
      })
  }, [inputSearch])

  return (
    <div className={cx('centerContainer')}>
      <div className={cx('formContainer')}>
        <Tippy
          interactive
          appendTo={() => document.body}
          visible={visible}
          onClickOutside={() => setVisible(false)}
          render={(attrs) => (
            <div className={cx('searchResult')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <ContentSuggest content='speed' />
                <ContentSuggest content='Son Tung MT-P' />
                <ContentSuggest content='story tam trang' />
                <ContentSuggest content='schannel' />
                <ContentSuggest content='say you do' />
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
            {inputSearch && (
              // <div className={cx('loadingIcon')}>
              //   <Loading className={cx('loadingCircle')} />
              // </div>
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
