import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

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

    hendleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
        <div className={styles.Overlay} onClick={this.handleBackdropClick}>
            <div className={styles.Modal}>
                <img src={this.props.largeImage} alt="" />
            </div>
        </div>,
        modalRoot,
        );
    }
}

export default Modal;