import classNames from 'classnames/bind'
import styles from './ImageBg.module.scss'
import { forwardRef } from 'react'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function ImageBg({ ml, wid, src, ...passProp }, ref) {
  const passStyle = () => {
    return {
      marginLeft: `${ml}px`,
      width: `${wid}px`,
      height: `${wid}px`,
      backgroundImage: `url(${src}), url(${images.noImage})`,
    }
  }
  return <div ref={ref} style={passStyle()} {...passProp} className={cx('style')}></div>
}

export default forwardRef(ImageBg)
