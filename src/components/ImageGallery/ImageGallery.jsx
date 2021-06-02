import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickImage }) => {
    return (
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem images={images} onClickImage={onClickImage} />
        </ul>
    );
};

export default ImageGallery;