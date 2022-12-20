import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  disabled,
  primary = true,
  outline,
  hasIcon,
  rounded,
  className,
  left,
  right,
  children,
  ...passProp
}) {
  const attributes = { ...passProp }

  let Comp = 'button'
  if (to) {
    attributes.to = to
    Comp = Link
  } else if (href) {
    attributes.href = href
    Comp = 'a'
  }

  if (disabled) {
    Object.keys(attributes).forEach((key) => {
      if (key.startsWith('on') && typeof attributes[key] === 'function') {
        delete attributes[key]
      }
    })
  }

  if (outline || hasIcon || rounded || className) {
    primary = false
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    hasIcon,
    rounded,
    disabled,
    [className]: className,
  })

  return (
    <Comp className={classes} {...attributes}>
      {left && left}
      <span className={cx('title')}>{children}</span>
      {right && right}
    </Comp>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
