import React from 'react';
import PromTypes from 'prop-types';
import SearchForm from '../SearchForm';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
    return (
        <header className={styles.Searchbar}>
            <SearchForm onSubmit={onSubmit} />
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PromTypes.func,
};

export default Searchbar;