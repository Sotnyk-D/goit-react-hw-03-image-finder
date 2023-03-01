import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, onImageClick } = this.props;
    return (
      <li className={style.imageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={style.imageGalleryItemImage}
          onClick={() => onImageClick(largeImageURL)}
        />
      </li>
    );
  }
}

imageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
};
