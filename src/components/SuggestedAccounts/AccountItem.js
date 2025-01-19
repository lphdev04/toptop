import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';
import { useEffect, useState } from 'react';
import * as suggestedAccountService from '@/services/suggestedAccountService';
import Image from '@/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem() {
    const [suggestedAccount, setSuggestedAccount] = useState([]);

    useEffect(() => {
        const getSuggestedAccounts = async () => {
            const result = await suggestedAccountService.suggestedAccounts('phuong hoa');

            setSuggestedAccount(result);
        };

        getSuggestedAccounts();
    }, []);

    const renderPreview = (item) => (props) => {
        return (
            <div tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview key={item.id} data={item} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            {suggestedAccount.map((item) => (
                <div key={item.id}>
                    <Tippy
                        offset={[-15, 0]}
                        interactive
                        delay={[1000, 0]}
                        render={renderPreview(item)}
                        placement="bottom"
                    >
                        <Link to={`/@${item.nickname}`} className={cx('wrapper')}>
                            <div className={cx('account-item')}>
                                <Image className={cx('avatar')} src={item.avatar} alt={item.full_name} />
                                <div className={cx('item-info')}>
                                    <h4 className={cx('nickname')}>
                                        <strong>{item.full_name}</strong>
                                        {item.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                                    </h4>
                                    <p className={cx('name')}>{item.nickname}</p>
                                </div>
                            </div>
                        </Link>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
