// import React from 'react';
import React, { PropTypes } from 'react';
import type { SearchResult } from '../type';
import './../styles/Item.css';

const Item = (props: SearchResult) => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image">
        <img
          alt="img"
          className="activator"
          src={props.artworkUrl100.replace('100x100', '600x600')}
        />
      </div>
      <div className="player-wrapper">
        <video controls name="media">
          <source src={props.previewUrl} type="audio/x-m4a"></source>
        </video>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.trackName || props.collectionName}<i className="material-icons right">more_vert</i></span>
        <span className="card-title activator grey-text text-darken-4">{props.artistName}<i className="material-icons right">more_vert</i></span>
        <p>
          <a target="_blank" rel="noopener" noreferrer="true" href={props.trackViewUrl || props.collectionViewUrl}>
            more
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.trackName || props.collectionName}<i className="material-icons right">close</i></span>
        <p>{props.longDescription || props.description || 'No description.'}</p>
      </div>
    </div>
  </div>
);

export default Item;