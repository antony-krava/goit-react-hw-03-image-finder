import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import defaultImage from '../defaultImage.jpg';

const ImageGalleryItem = ({ images, onClickImage }) => {
    return (
        <>
            {images.map(({ id, webformatURL = { defaultImage }, largeImageURL }) => (
                <li key={id} className={styles.ImageGalleryItem}>
                    <img
                        src={webformatURL}
                        alt=""
                        className={styles.ImageGalleryItemImage}
                        onClick={() => onClickImage({ largeImageURL })}
                    />
                </li>
            ))}
        </>
    );
};

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string,
            largeImageURL: PropTypes.string,
        }),
    ),
    onClickImage: PropTypes.func,
};

export default ImageGalleryItem;