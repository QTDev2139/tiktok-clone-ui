import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';
function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => clsx(styles.menuItem, { [styles.active]: nav.isActive })} to={to}>
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon}
                    <span className={clsx(styles.menuTitle)}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
