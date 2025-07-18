import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({
    to,
    href,
    primary = false,
    small = false,
    rounded = false,
    large = false,
    outline = false,
    disabled = false,
    text = false,
    leftIcon = false,
    onClick,
    MenuNoMarginLeft,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        // delete props.onClick
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.small]: small,
        [styles.disabled]: disabled,
        [styles.large]: large,
        [styles.text]: text,
        [styles.rounded]: rounded,
        [styles.MenuNoMarginLeft]: MenuNoMarginLeft,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span className={clsx(styles.title)}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    text: PropTypes.bool,
    MenuNoMarginLeft: PropTypes.bool,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
