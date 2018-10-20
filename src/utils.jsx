import type { HeaderState, Limit } from './type';

export const getApiUrl = (query : HeaderState, limit: Limit) => (

    `https://itunes.apple.com/search?media=music&term=${query.query.split(' ').join('+')}&limit=${limit || 10}`
)
