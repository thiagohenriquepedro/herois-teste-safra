import { ComicDate } from './ComicDate';

export interface Comic {

  title?: string,

  dates?: ComicDate[],

  thumbnail?: {
    path?: string,
    extension?: string
  },
  images?: [
    {
      path?: string,
      extension?: string
    }
  ],

}
