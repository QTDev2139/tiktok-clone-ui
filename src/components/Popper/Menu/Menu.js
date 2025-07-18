import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import styles from './Menu.module.scss';
import { Wapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={clsx(styles.menuLists)} tabIndex="2" {...attrs}>
            <PopperWrapper poperBottom>
                {history.length > 1 && <Header title={current.title} onBack={handleResetMenu} />}
                <div className={clsx(styles.menuBody)}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            offset={[12, 8]}
            onHide={handleResetToFirstPage}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
