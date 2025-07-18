import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

function Header({ title, onBack }) {
    return (
        <header className={clsx(styles.header)}>
            <button className={clsx(styles.backBtn)}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </button>
            <h4 className={clsx(styles.headerTitle)}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
