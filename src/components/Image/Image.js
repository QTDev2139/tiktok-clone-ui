import PropTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';

import images from '~/assets/img';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: CustomsFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(CustomsFallBack);
    };

    return (
        <img
            className={clsx(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
