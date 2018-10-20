import type { HeaderState } from './type';

export const getApiUrl = (query : HeaderState) => `https://itunes.apple.com/search?media=music&term=${query.query.split(' ').join('+')}`;
