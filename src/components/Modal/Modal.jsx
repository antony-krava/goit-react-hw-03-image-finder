import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeyDowm);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeyDowm);
    }

    hendleKeyDowm = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
        <div className={styles.Overlay} onClick={this.handleBackdropClick}>
            <div className={styles.Modal}>
            <img src={this.props.largeImage} alt="" />
            </div>
        </div>
        );
    }
}

export default Modal;