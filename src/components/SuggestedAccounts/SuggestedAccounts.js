import clsx from 'clsx';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <h2 className={clsx(styles.label)}>{label}</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={clsx(styles.seeAll)}>Xem thêm</p>
        </div>
    );
}

export default SuggestedAccounts;
