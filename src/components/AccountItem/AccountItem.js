import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
            <Image src={data.avatar} alt={data.full_name} className={clsx(styles.avatar)} />
            <div className={clsx(styles.info)}>
                <div className={clsx(styles.name)}>
                    <h4>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCircleCheck} />}
                </div>
                <span className={clsx(styles.username)}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.node.isRequired,
};

export default AccountItem;
