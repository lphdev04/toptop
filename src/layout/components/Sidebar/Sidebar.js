import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '@/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, FollowIcon, LiveIcon } from '@/components/Icons';
import SuggestedAccounts from '@/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
        </aside>
    );
}

export default Sidebar;
