import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/UI/Button';
import Spinner from './components/UI/Spinner';
import Api from './components/Api';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onChengeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  }

  fetchImages = () => {
    const { currentPage, searchQuery, } = this.state;
    const options = { searchQuery, currentPage, };

    this.setState({
      isLoading: true,
    });

    Api
      .fetchImages(options).then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response],
          currentPage: prevState.currentPage + 1,
        }));
      }).catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  openModal = modalImage => {
    this.setState(() => ({ largeImage: modalImage }));
    this.toggleModal();
  }

  closeModal = () => {
    this.setState({ largeImage: '' });
    this.toggleModal();
  }

  render() {
    const { images, isLoading, error, showModal, largeImage } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div children={styles.App}>
        {error && <h1>Error!!!!!</h1>}
        <Searchbar onSubmit={this.onChengeQuery} />
        <ImageGallery images={images} onClickImage={this.openModal} />

        {shouldRenderLoadMoreButton && (<Button fetchImages={this.fetchImages}>load more</Button>)}
        {isLoading && <Spinner />}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={largeImage.largeImageURL}
          />
        )}
      </div>
    );
  }
};

export default App;