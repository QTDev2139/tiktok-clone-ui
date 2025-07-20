import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/img';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    DarkIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LightbulbIcon,
    MessageIcon,
    SettingIcon,
} from '~/components/Icons';
import Search from '../Search';

const MENU_ITEMS = [
    {
        icon: <LightbulbIcon />,
        title: 'LIVE Creator Hub',
    },
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
        to: 'feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <DarkIcon />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận Xu',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            separate: true,
        },
    ];

    return (
        <header className={clsx(styles.wapper)}>
            <div className={clsx(styles.inner)}>
                <Link to={config.routes.home} className={clsx(styles.logo)}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={clsx(styles.action)}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>

                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" delay={[0, 300]}>
                                <button className={clsx(styles.menuBtn)}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hòm thư" delay={[0, 300]}>
                                <button className={clsx(styles.menuBtn)}>
                                    <InboxIcon />
                                    <div className={clsx(styles.badge)}>12</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div className={clsx(styles.currentUser)}>
                                <Image
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/085c35d2f0472053770d1938ac774770.jpeg?lk3s=a5d48078&nonce=54623&refresh_token=58243a721cdf126f720130291cd347ca&x-expires=1718352000&x-signature=aFBrs5%2FftVvVfFGIpftIGouKPo8%3D&shp=a5d48078&shcp=b59d6b55"
                                    alt="Q Dev"
                                    // fallBack = "https://scontent.xx.fbcdn.net/v/t39.30808-1/430891351_924650289147668_6573279839907915703_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tZJ5U9A7fRcQ7kNvgFTsLu1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AYBNZ6HrA6gmtlfl2taPY948OQI2YzBBUNbGNM1BZ72CYQ&oe=666F08A1"
                                />
                            </div>
                        ) : (
                            <button className={clsx(styles.moreBtn)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
// m1
// m2

// m4
// m5
// m3