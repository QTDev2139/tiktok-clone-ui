import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Popper.module.scss';

function Wapper({ children, poperBottom }) {
    return <div className={clsx(styles.wrapper, { [styles.poperBottom]: poperBottom })}>{children}</div>;
}

Wapper.propTypes = {
    children: PropTypes.node.isRequired,
    poperBottom: PropTypes.bool,
};

export default Wapper;
