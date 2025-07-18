// Layout
import { HeaderOnly } from '~/Layouts';

// Pages
import config from '~/config';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.following, component: Following },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoute = [];

export { publicRoute, privateRoute };
