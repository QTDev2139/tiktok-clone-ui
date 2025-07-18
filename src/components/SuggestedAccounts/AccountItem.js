import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '../Image';
import { Wapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccount.module.scss';

function AccountItem() {
    // const renderReview = (props) => {
    //     return (
    //         <div tabIndex="-1" {...props}>
    //             <PopperWrapper>
    //                 <AccountPreview />
    //             </PopperWrapper>
    //         </div>
    //     );
    // };

    return (
        <div className={clsx(styles.accountItem)}>
            <Image
                className={styles.avatar}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/085c35d2f0472053770d1938ac774770.jpeg?lk3s=a5d48078&nonce=98296&refresh_token=6639e4f7371f9f9c24a4298039f8be89&x-expires=1719363600&x-signature=mfByx2OYPrxQKeVov7ioUThaU40%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={clsx(styles.itemInfo)}>
                <h4 className={clsx(styles.nickname)}>
                    <span>dangtrinh2139</span>
                    <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />
                </h4>
                <div className={clsx(styles.name)}>Đặng Trinh</div>
            </div>
        </div>
    );
}

export default AccountItem;
