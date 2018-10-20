
export type ContainerState = {
  status: 'init' | 'loading' | 'noContent' | 'error' | '',
  data?: Object
};

export type HeaderState = {
  //media: SearchOption,
  query: string
};

export type Limit = {
  limit: '20'
};

export type SearchResult = {
  trackId: number,
  trackPrice?: number,
  collectionPrice?: number,
  price?: number,
  trackViewUrl?: string,
  collectionViewUrl?: string,
  artworkUrl100: string,
  trackName?: string,
  artistName?: string,
  collectionName?: string,
  kind: string,
  previewUrl?: string
};
