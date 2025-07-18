import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { Wapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/Hooks';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const result = await searchServices.search(debounceValue);
            setSearchResult(result);

            setLoading(false);
        };
        fetchAPI();
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body}
            visible={showResult && encodeURIComponent(searchValue.trim()) && searchResult.length > 0}
            render={(attrs) => (
                <div className={clsx(styles.searchResults)} {...attrs}>
                    <PopperWrapper>
                        <h4 className={clsx(styles.searchTitle)}>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={clsx(styles.search)}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    placeholder="Tìm kiếm"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value.trimStart())}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={clsx(styles.clear)} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={clsx(styles.loading)}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={clsx(styles.searchBtn)}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
