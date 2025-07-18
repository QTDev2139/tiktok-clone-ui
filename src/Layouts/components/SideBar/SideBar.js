import clsx from 'clsx';
import config from '~/config';

import {
    ExploreIcon,
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    ExploreActiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';

function SideBar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <Menu>
                <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />

                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Các tài khoản đang follow" />
        </aside>
    );
}

export default SideBar;
