import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

function Menu({ children }) {
    return <nav className={clsx(styles.menuList)}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
