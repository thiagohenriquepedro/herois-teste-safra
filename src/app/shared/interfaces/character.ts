import { Story } from './Story';

export interface Character {
  id?: number,
  name?: string,
  description?: string,
  modified?: Date,

  thumbnail?: {
    path?: string,
    extension?: string
  },

  stories?: {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: Story[]
  },

}
