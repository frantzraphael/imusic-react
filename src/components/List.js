import React, { PropTypes } from 'react';
import type { SearchResult } from '../type';
import Item from './Item';
import './../styles/General.css';

const List = ({
  results,
  resultCount
}: {
  results: Array<SearchResult>,
  resultCount: number
}) => (
  <div className="list-wrapper flex row-wrap space-between">
    {resultCount > 0 ? results.map((item, i) => <Item key={item.trackId || i} {...item} />) : null}
  </div>
);

export default List;