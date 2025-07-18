import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
    const classes = clsx(styles.MenuBtn, {
        [styles.separate]: data.separate,
    });
    return (
        <div className={classes}>
            <Button MenuNoMarginLeft leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
